import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CounterOfTasks } from "../CounterOfTasks/CounterOfTasks";
import { FilterByPriority } from "../FilterByPriority/FilterByPriority";
import { Modal } from "../Modal/ModalForm";
import { SearchEngine } from "../SearchEngine/SearchEngine";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoWrapper() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      taskName: "Clean room",
      priority: 1,
      id: 1,
      done: false,
    },
    {
      taskName: "Go to shopping",
      priority: 2,
      id: 2,
      done: false,
    },
    {
      taskName: "Fix the car",
      priority: 0,
      id: 3,
      done: false,
    },
  ]);

  useEffect(() => {
    // Inicjalizacja wyników wyszukiwania na początku
    setSearchResults(tasks);
  }, [tasks]);

  function deleteItem(id) {
    setTasks((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function addItem(newTaskName, selectValue) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        taskName: newTaskName,
        id: Math.random(),
        priority: selectValue,
        done: false,
      },
    ]);
    setOpenModal(false);
  }

  function finishItem(id) {
    setTasks((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      }),
    );
  }

  function editItem(id, newText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, taskName: newText } : task,
      ),
    );
  }

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredResults = tasks.filter((item) =>
      item.taskName.toLowerCase().includes(query.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };
  const filteredTasks =
    filter === "All"
      ? searchResults
      : searchResults.filter((priority) => priority.priority == filter);

  return (
    <>
      <div className="bg-bgDirtyWhite flex w-[800px] flex-col overflow-hidden rounded-md border-2 border-black">
        <header className="flex flex-col items-center bg-violet-700 p-4 text-white">
          <h1 className="text-4xl">Todo List</h1>
          <SearchEngine
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
          <FilterByPriority filter={filter} setFilter={setFilter} />
        </header>

        <ul className="border-b-2">
          <CounterOfTasks filteredTasks={filteredTasks} />
          {filteredTasks.map(({ id, taskName, priority, done }) => (
            <TodoItem
              key={id}
              taskName={taskName}
              priority={priority}
              done={done}
              onDeleteButtonClick={() => deleteItem(id)}
              onDoneButtonClick={() => finishItem(id)}
              onEditButtonClick={(newText) => editItem(id, newText)}
            />
          ))}
        </ul>
        <Button
          bgColor={"bg-violet-700"}
          hover={"hover:bg-violet-800"}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          + Add new task
        </Button>
      </div>
      {openModal && (
        <Modal
          onFormSubmit={(newTaskName, selectValue) =>
            addItem(newTaskName, selectValue)
          }
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}

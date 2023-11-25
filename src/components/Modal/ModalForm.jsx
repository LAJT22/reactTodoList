import { useState } from "react";
import { Button } from "../Button/Button";

export function Modal({ setOpenModal, onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sprawdź, czy pola są wypełnione
    if (!inputValue.trim()) {
      setInputError(true);
    } else {
      setInputError(false);
    }

    if (!selectValue.trim() || selectValue === "Priority") {
      setSelectError(true);
    } else {
      setSelectError(false);
    }

    // Jeśli oba pola są wypełnione, wykonaj onSubmit
    if (inputValue.trim() && selectValue.trim() && selectValue !== "Priority") {
      onFormSubmit(inputValue, selectValue);
      setOpenModal(false);
    }
  };

  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 ">
      <form
        className="bg-bgDirtyWhite flex h-[500px] w-[500px] flex-col items-center rounded-lg border-2 border-black p-6 "
        onSubmit={handleSubmit}
      >
        <div className="self-end">
          <button className="text-2xl" onClick={() => setOpenModal(false)}>
            &times;
          </button>
        </div>
        <h2 className="text-3xl">Add your task</h2>
        <div className="flex h-full w-full flex-col justify-center gap-2">
          <label htmlFor="taskName">Task name:</label>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className={`w-full rounded-md border-2  p-2 text-black focus:border-violet-400 focus:outline-none ${
              inputError ? "bg-red-300 border-red-400" : ""
            }`}
            type="text"
            id="taskName"
            placeholder="Enter a task name..."
          />
          {inputError && (
            <p className="text-red-500">Please enter a task name.</p>
          )}
          <label className="mt-8" htmlFor="Priority">
            Priority:
          </label>
          <select
            value={selectValue === "" ? "Priority" : selectValue}
            onChange={(event) => setSelectValue(event.target.value)}
            className={`rounded-md  border-2 p-2 text-black focus:border-violet-400 focus:outline-none ${
              selectError ? "bg-red-300 border-red-400" : ""
            }`}
            name=""
            id="Priority"
          >
            <option value="Priority" disabled>
              Choose priority
            </option>
            <option value="0">High</option>
            <option value="1">Medium</option>
            <option value="2">Low</option>
          </select>
          {selectError && (
            <p className="text-red-500">Please select a priority.</p>
          )}
        </div>

        <div className="flex w-full justify-center gap-10">
          <Button
            bgColor={"bg-red-500"}
            hover={"hover:bg-red-600"}
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </Button>
          <Button bgColor={"bg-green-500"} hover={"hover:bg-green-600"}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export function CounterOfTasks({ filteredTasks}) {
  const countTasks = (value) => {
    const numberOfTaks = filteredTasks.filter((item) => item.done === value);
    return numberOfTaks.length;
  };

  const taskIsActive = false;
  const taskIsComplited = true;
  return (
    <>
      {" "}
      <h2 className="p-2 text-center text-xl">Counter of tasks</h2>
      <div className="flex justify-around bg-violet-700 p-4 text-white">
        <p>Total: {filteredTasks.length}</p>
        <p>Active: {countTasks(taskIsActive)}</p>
        <p>Completed: {countTasks(taskIsComplited)}</p>
      </div>
    </>
  );
}

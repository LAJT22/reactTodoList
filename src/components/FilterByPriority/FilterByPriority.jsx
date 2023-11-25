export function FilterByPriority({ filter, setFilter }) {
  return (
    <div className="flex gap-10 ">
      <p>Filter by priority</p>
      <select
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        className="  rounded-md text-black focus:border-violet-400 focus:outline-none border-2 border-black"
        name="filter"
        id="filter"
      >
        <option value="All">All</option>
        <option value="0">High</option>
        <option value="1">Medium</option>
        <option value="2">Low</option>
      </select>
    </div>
  );
}

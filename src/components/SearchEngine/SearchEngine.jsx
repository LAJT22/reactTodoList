export function SearchEngine({ searchQuery, handleSearchInputChange }) {
  return (
    <input
      className="my-4 w-full rounded-md p-2 text-black border-2 border-black focus:border-violet-400 focus:outline-none"
      placeholder="Search Todo..."
      type="text"
      value={searchQuery}
      onChange={handleSearchInputChange}
      id="SearchEngine"
    />
  );
}

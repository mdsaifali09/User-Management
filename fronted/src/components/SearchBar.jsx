import { useEffect, useState } from "react";

export default function SearchBar({ setSearch, setSort, onReset }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="🔍 Search users..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        onChange={(e) => setSort(e.target.value)}
        className="border p-3 rounded-lg"
      >
        <option value="">Sort</option>
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>

      <button
        onClick={() => {
          setValue("");
          onReset();
        }}
        className="bg-gray-200 px-4 rounded-lg hover:bg-gray-300"
      >
        Reset
      </button>
    </div>
  );
}
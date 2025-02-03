"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-2 px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
}

import Link from "next/link";

export default function SearchResults({ results, searchQuery }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Results for "{searchQuery}"
      </h2>
      <div className="space-y-4">
        {results.map((item) => (
          <Link
            key={item.id}
            href={`/search?q=${encodeURIComponent(searchQuery)}&id=${item.id}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold">{item.heading}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <time className="text-sm text-gray-500 block mt-2">
              {new Date(item.timestamp).toLocaleDateString()}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}

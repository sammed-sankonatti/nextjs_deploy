import Link from "next/link";

export default function GuideDetail({ guide, searchQuery }) {
  return (
    <div>
      <Link
        href={`/search?q=${encodeURIComponent(searchQuery)}`}
        className="mb-6 inline-block text-blue-500 hover:text-blue-600"
      >
        ← Back to results
      </Link>
      <article className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">{guide.heading}</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">{guide.description}</p>
          <div dangerouslySetInnerHTML={{ __html: guide.content }} />
        </div>
        <time className="text-sm text-gray-500 block mt-4">
          Last updated: {new Date(guide.timestamp).toLocaleDateString()}
        </time>
      </article>
    </div>
  );
}

import SearchResults from "@/components/SearchResults";
import GuideDetail from "@/components/GuideDetail";

async function getSearchResults(query) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/metadata?q=${query}`
  );
  return res.json();
}

async function getGuideDetail(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/${id}`);
  return res.json();
}

export default async function SearchPage({ searchParams }) {
  const { q, id } = searchParams;
  const results = q ? await getSearchResults(q) : [];
  const guide = id ? await getGuideDetail(id) : null;

  return (
    <div className="max-w-4xl mx-auto">
      {guide ? (
        <GuideDetail guide={guide} searchQuery={q} />
      ) : (
        <SearchResults results={results} searchQuery={q} />
      )}
    </div>
  );
}

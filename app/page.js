import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Search Technical Guides</h1>
      <SearchBar />
    </div>
  );
}

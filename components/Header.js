import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DrillBit
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
          <Link href="#" className="hover:text-secondary">
            Categories
          </Link>
          <Link href="#" className="hover:text-secondary">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

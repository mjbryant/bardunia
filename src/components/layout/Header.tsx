import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-slate-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/items" className="hover:text-slate-300">
              Items
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

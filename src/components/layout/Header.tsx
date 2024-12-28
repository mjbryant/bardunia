import Link from 'next/link';

import Filip from '@/components/svg/filip.svg';

export default function Header() {
  return (
    <header className="bg-white text-slate-800 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <Link href="/" className="hover:text-slate-300">
            <Filip />
          </Link>
        </ul>
      </nav>
    </header>
  );
}

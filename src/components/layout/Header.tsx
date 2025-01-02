import Link from 'next/link';

import Filip from '@/components/svg/filip.svg';
import Settings from '@/components/menu/Settings';

export default function Header() {
  return (
    <header className="text-slate-800 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-between">
          <Link href="/" className="hover:text-slate-300">
            <Filip />
          </Link>
          <Settings />
        </ul>
      </nav>
    </header>
  );
}

import Overlay from '@/components/canvas/Overlay';
import Link from 'next/link';

interface Item {
  id: number;
  name: string;
  description: string;
  path: string;
}

const ITEMS: Item[] = [
  {
    id: 1,
    name: "Bouncin'",
    description: 'How to bounce',
    path: '/bouncin',
  },
  {
    id: 2,
    name: 'Second Item',
    description: 'Another interesting item to showcase',
    path: '/placeholder-2',
  },
  {
    id: 3,
    name: 'Third Item',
    description: 'Yet another amazing item in our collection',
    path: '/placeholder-3',
  },
  {
    id: 4,
    name: 'Fourth Item',
    description: 'Again? Wow!',
    path: '/placeholder-4',
  },
  {
    id: 5,
    name: 'Fifth Item',
    description: "Okay now it's getting boring",
    path: '/placeholder-5',
  },
];

/**
 * Things to do to do it right:
 * 1. Better way to create squares rather than using fixed width
 * 2. Position item content in the center
 */

export default function Home() {
  return (
    <>
      <Overlay hidden={true} />
      <div className="mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Bardunia</h1>
        <div className="flex gap-6 p-12">
          {ITEMS.map((item) => (
            <Link
              key={item.id}
              className="w-64 h-64 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:bg-slate-50 hover:cursor-pointer"
              href={item.path}
            >
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

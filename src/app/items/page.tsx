interface Item {
  id: number;
  name: string;
  description: string;
}

const SAMPLE_ITEMS: Item[] = [
  {
    id: 1,
    name: 'First Item',
    description: 'This is the first item in our list',
  },
  {
    id: 2,
    name: 'Second Item',
    description: 'Another interesting item to showcase',
  },
  {
    id: 3,
    name: 'Third Item',
    description: 'Yet another amazing item in our collection',
  },
];

export default function ItemsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Items</h1>
      <div className="grid gap-6">
        {SAMPLE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

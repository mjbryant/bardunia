export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Next.js App</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a modern web application built with Next.js 14, TypeScript, and
        Tailwind CSS.
      </p>
      <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-600">
          Edit{" "}
          <code className="bg-slate-100 px-2 py-1 rounded">
            src/app/page.tsx
          </code>{" "}
          to customize this page.
        </p>
      </div>
    </div>
  );
}

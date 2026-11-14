export default function Loading() {
  return (
    <main className="container mx-auto min-h-screen py-16">
      <h1 className="mb-8 text-3xl font-bold">
        All Tiles
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-xl bg-white p-4 shadow"
          >
            <div className="h-48 rounded-lg bg-gray-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </main>
  );
}
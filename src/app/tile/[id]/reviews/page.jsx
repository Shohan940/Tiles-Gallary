
export default async function TileReviews({ params }) {

  const { id } = await params;

  return (
    <main className="container mx-auto py-20 px-5">

      <h1 className="text-4xl font-bold">
        Tile Reviews
      </h1>

      <p className="mt-4 text-gray-600">
        Reviews for Tile ID: {id}
      </p>

    </main>
  );
}

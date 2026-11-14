
import { Suspense } from "react";
import AllTilesList from "@/components/AllTilesList";

async function getTiles() {
  try {
    const response = await fetch(
      "https://tiles-gallary-server.onrender.com/tiles",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tiles");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function TilesContent() {
  const tiles = await getTiles();

  return <AllTilesList tiles={tiles} />;
}

export default function AllTilesPage() {
  return (
    <main className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">
        Explore All Tiles
      </h1>

      <Suspense fallback={<p>Loading tiles...</p>}>
        <TilesContent />
      </Suspense>
    </main>
  );
}

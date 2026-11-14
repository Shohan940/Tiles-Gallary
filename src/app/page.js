
import HeroBanner from "@/components/home/HeroBanner";
import MarqueeSection from "@/components/home/MarqueeSection";
import FeaturedTiles from "@/components/home/FeaturedTiles";

import { Suspense } from "react";

// Fetch Tiles from JSON Server
async function getTiles() {
  try {
    const response = await fetch(
      "http://localhost:3001/tiles",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tiles");
    }

    return await response.json();

  } catch (error) {
    console.error("Tiles fetching error:", error);
    return [];
  }
}

// Featured Tiles Section
async function FeaturedTilesSection() {
  const tiles = await getTiles();

  if (!tiles || tiles.length === 0) {
    return (
      <p className="text-gray-500">
        No tiles found.
      </p>
    );
  }

  return (
    <FeaturedTiles tiles={tiles.slice(0, 4)} />
  );
}

// Home Page
export default function Home() {
  return (
    <main className="container mx-auto space-y-16 px-4 py-16">

      {/* Hero Banner */}
      <HeroBanner />

      {/* Announcement Marquee */}
      <MarqueeSection />

      {/* Featured Tiles */}
      <section>
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#B87955]">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-[#24231F] md:text-4xl">
              Featured Tiles
            </h2>
          </div>

          <p className="max-w-md text-sm text-gray-500">
            Explore our handpicked tile collections and discover
            beautiful designs for your space.
          </p>

        </div>

        <Suspense
          fallback={
            <p className="py-10 text-center text-gray-500">
              Loading featured tiles...
            </p>
          }
        >
          <FeaturedTilesSection />
        </Suspense>

      </section>

    </main>
  );
}

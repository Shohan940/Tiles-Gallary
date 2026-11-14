import { Suspense } from "react";

import HeroBanner from "@/components/home/HeroBanner";
import MarqueeSection from "@/components/home/MarqueeSection";
import FeaturedTiles from "@/components/home/FeaturedTiles";

// Fetch Featured Tiles from JSON Server
async function getFeaturedTiles() {
  try {
    const response = await fetch("https://tiles-gallary-server.onrender.com/tiles", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch tiles");
    }

    const tiles = await response.json();

    return tiles.slice(0, 4);
  } catch (error) {
    console.error("Featured Tiles Error:", error);
    return [];
  }
}

// Featured Tiles Section
async function FeaturedTilesSection() {
  const tiles = await getFeaturedTiles();

  return <FeaturedTiles tiles={tiles} />;
}

// Loading UI
function FeaturedTilesLoading() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-80 animate-pulse rounded-2xl bg-gray-200"
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pt-6 md:px-8 md:pt-10">
        <HeroBanner />
      </section>

      {/* 2. Marquee Announcement */}
      <section className="mt-10">
        <MarqueeSection />
      </section>

      {/* 3. About Tiles Gallery */}
<section
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "60px 20px",
  }}
>
  <div style={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
    <p style={{ textAlign: "center" }}>About Us</p>

    <h2 style={{ textAlign: "center", fontSize: "40px" }}>
      Beautiful Tiles, Beautiful Spaces
    </h2>

    <p style={{ textAlign: "center" }}>
      Discover beautiful tile designs, unique patterns, and modern
      collections to inspire your perfect space.
    </p>
  </div>
</section>

      {/* 4. Featured Tiles */}
      <section className="bg-[#EEE9E0] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex flex-col items-center gap-5 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#B87955]">
                Handpicked For You
              </p>

              <h2 className="text-3xl font-bold text-[#24231F] md:text-5xl">
                Featured Tiles
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
                Explore our selected tile designs and find your inspiration.
              </p>
            </div>

            <a
              href="/all-tiles"
              className="inline-flex items-center justify-center rounded-lg border border-[#24231F] px-7 py-3 font-semibold text-[#24231F] transition hover:bg-[#24231F] hover:text-white"
            >
              View All Tiles
              <span className="ml-2">→</span>
            </a>
          </div>

          <Suspense fallback={<FeaturedTilesLoading />}>
            <FeaturedTilesSection />
          </Suspense>
        </div>
      </section>

      {/* 5. Why Choose Tiles Gallery */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-24">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[4px] text-[#B87955]">
            Why Choose Us
          </p>

          <h2 className="w-full text-center text-3xl font-bold text-[#24231F] md:text-5xl">
            What Makes Us Special?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-600">
            Discover your favorite tile styles and designs.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-[#24231F]/10 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B87955]/10 text-3xl">
                🎨
              </div>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#24231F]">
              Unique Designs
            </h3>

            <p className="leading-7 text-gray-600">
              Explore creative patterns and beautiful tile styles.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-[#24231F]/10 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B87955]/10 text-3xl">
                ✨
              </div>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#24231F]">
              Modern Collection
            </h3>

            <p className="leading-7 text-gray-600">
              Discover modern, classic, and minimalist collections.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-[#24231F]/10 bg-white p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B87955]/10 text-3xl">
                🏡
              </div>
            </div>

            <h3 className="mb-3 text-xl font-bold text-[#24231F]">
              Design Inspiration
            </h3>

            <p className="leading-7 text-gray-600">
              Get inspired to create beautiful spaces.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";

export default function AllTilesList({ tiles }) {
  const [search, setSearch] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tiles by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-4 mb-8 outline-none focus:border-blue-500"
      />

      {/* Tile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={tile.image}
              alt={tile.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">
              {tile.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {tile.category}
            </p>

            <p className="font-bold mt-2">
              ${tile.price}
            </p>

            <Link
              href={`/tile/${tile.id}`}
              className="inline-block mt-4 text-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {filteredTiles.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No tiles found!
        </p>
      )}
    </section>
  );
}

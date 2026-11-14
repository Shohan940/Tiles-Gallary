"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FeaturedTiles({ tiles }) {
  if (!tiles || tiles.length === 0) {
    return <p className="text-gray-500">No tiles found.</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      className="featured-swiper !pb-14"
    >
      {tiles.map((tile) => (
        <SwiperSlide key={tile.id} className="h-auto">
          <div className="h-full overflow-hidden rounded-xl bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Tile Image */}
            <img
              src={tile.image}
              alt={tile.title}
              className="h-48 w-full rounded-lg object-cover"
            />

            {/* Tile Information */}
            <div className="flex flex-col">
              <h2 className="mt-4 text-xl font-bold text-[#24231F]">
                {tile.title}
              </h2>

              <p className="mt-2 text-sm text-gray-500">{tile.category}</p>

              {/* Details Button */}
              <Link
                href={`/tile/${tile.id}`}
                className="mt-4 inline-block w-fit rounded-lg bg-[#24231F] px-5 py-2 text-white transition hover:bg-[#B87955]"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

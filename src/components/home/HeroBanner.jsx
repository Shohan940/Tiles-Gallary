import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#24231F] px-6 py-20 text-center text-white md:py-32">

      {/* Background Decoration */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B87955]/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-3xl">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#D9A783]">
          Welcome to Tiles Gallery
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Discover Your Perfect Aesthetic
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Explore beautiful tile collections and find the perfect
          design to transform your space.
        </p>

        <Link
          href="/all-tiles"
          className="inline-block rounded-full bg-[#B87955] px-8 py-4 font-semibold text-white transition hover:bg-[#996344]"
        >
          Browse Now
        </Link>

      </div>
    </section>
  );
}
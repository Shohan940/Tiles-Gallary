import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative flex min-h-[450px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#24231F] px-6 py-20 text-center text-white md:min-h-[550px] md:py-32">
      {/* Background Decoration */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B87955]/30 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#D9A783]">
          Welcome to Tiles Gallery
        </p>

        <h1 className="mb-6 w-full text-4xl font-bold leading-tight md:text-6xl">
          Discover Your Perfect Aesthetic
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-gray-300">
          Explore beautiful tile collections and find the perfect design to
          transform your space.
        </p>

        <Link
          href="/all-tiles"
          className="inline-flex min-h-14 items-center justify-center rounded bg-[#B87955] px-10 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#996344] hover:shadow-xl md:px-12 md:py-5 md:text-lg"
        >
          Browse Now
        </Link>
      </div>
    </section>
  );
}

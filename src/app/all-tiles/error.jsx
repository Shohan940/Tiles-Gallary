"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <h2 className="text-2xl font-bold">
        Something went wrong!
      </h2>

      <p className="mt-3 text-gray-600">
        We could not load the tiles. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-full bg-[#24231F] px-6 py-3 text-white"
      >
        Try Again
      </button>
    </main>
  );
}
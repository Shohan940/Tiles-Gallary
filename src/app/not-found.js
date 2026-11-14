
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F6F3ED] flex items-center justify-center px-5">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-[#B87955]">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5 text-[#24231F]">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500">
          Sorry! The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-[#B87955] text-white"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}

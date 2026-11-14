
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#24231F] text-white">

      <div className="container mx-auto px-5 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Information */}
          <div>
            <h2 className="text-3xl font-bold">
              TILES<span className="text-[#B87955]">.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7 max-w-sm">
              Discover beautiful tile collections and
              transform your spaces with timeless designs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link href="/" className="hover:text-[#B87955]">
                Home
              </Link>

              <Link href="/all-tiles" className="hover:text-[#B87955]">
                All Tiles
              </Link>

              <Link href="/my-profile" className="hover:text-[#B87955]">
                My Profile
              </Link>

            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>Email: hello@tilesgallery.com</p>

              <p>Phone: +880 1234-567890</p>

              <div className="flex gap-5 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#B87955]">
                  Facebook
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#B87955]">
                  Instagram
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-14 pt-7 text-center">

          <p className="text-sm text-gray-400">
            © 2026 Tiles Gallery.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

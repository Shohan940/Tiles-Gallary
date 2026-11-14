"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();

  const user = session?.user;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Tiles", href: "/all-tiles" },
  ...(user ? [{ name: "My Profile", href: "/my-profile" }] : []),
];

const handleLogout = async () => {
  const { error } = await signOut();

  if (error) {
    console.error("Logout failed:", error);
    return;
  }

  setMenuOpen(false);
  router.replace("/login");
  router.refresh();
};

  return (
    <header className="w-full bg-[#F6F3ED] border-b border-[#24231F]/10">
      <nav className="container mx-auto min-h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          TILES<span className="text-[#B87955]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#55514B] hover:text-[#B87955]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Authentication */}
        <div className="hidden md:flex items-center gap-4">
          {!isPending && user ? (
            <>
              {user.image && (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}

              <span className="text-sm font-medium">{user.name}</span>

              <button
                onClick={handleLogout}
                className="px-6 py-3 rounded-full bg-[#24231F] text-white hover:bg-[#B87955]"
              >
                Logout
              </button>
            </>
          ) : (
            !isPending && (
              <Link
                href="/login"
                className="px-7 py-3 rounded-full bg-[#24231F] text-white hover:bg-[#B87955]"
              >
                Login
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-5 py-5 space-y-5 bg-[#F6F3ED]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[#24231F]"
            >
              {link.name}
            </Link>
          ))}

          {!isPending &&
            (user ? (
              <div className="space-y-3">
                <p className="font-medium">{user.name}</p>

                <button
                  onClick={handleLogout}
                  className="px-6 py-3 rounded-full bg-[#24231F] text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-7 py-3 rounded-full bg-[#24231F] text-white"
              >
                Login
              </Link>
            ))}
        </div>
      )}
    </header>
  );
}

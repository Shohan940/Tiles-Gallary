"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data, error } = await signUp.email({
        name,
        email,
        password,
        image: photo || undefined,
      });

      if (error) {
        setErrorMessage(error.message || "Registration failed!");
        return;
      }

      setSuccessMessage("Account created successfully!");

      console.log("Registered user:", data);

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleRegister = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google registration failed:", error);
      setErrorMessage("Google registration failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">
      <h1 className="text-3xl font-bold text-center">Create Account</h1>

      <p className="text-gray-500 text-center mt-2">
        Join our Tiles Gallery community
      </p>

      <form onSubmit={handleRegister} className="mt-8 space-y-5">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Photo URL</label>
          <input
            type="url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Your profile photo URL"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            required
            minLength={8}
            className="w-full border rounded-lg p-3"
          />
          <p className="text-xs text-gray-500 mt-1">
            Password must contain at least 8 characters.
          </p>
        </div>

        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

        {successMessage && (
          <p className="text-green-600 text-sm">{successMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#24231F] text-white py-3 rounded-lg hover:bg-[#B87955] transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
        <button
          type="button"
          onClick={handleGoogleRegister}
          className="w-full rounded-lg border border-gray-300 py-3 font-semibold hover:bg-gray-100"
        >
          Sign up with Google
        </button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#B87955] font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

export default function LoginForm() {
  const router = useRouter();

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading and Error States
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Email and Password Login
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message || "Login failed!");
        return;
      }

      console.log("Login successful:", data);

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);

      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setErrorMessage("");

    try {
      const { error } = await signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(error.message || "Google login failed!");
        setGoogleLoading(false);
      }
    } catch (error) {
      console.error("Google login failed:", error);

      setErrorMessage("Google login failed. Please try again.");

      setGoogleLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center">
        Welcome Back
      </h1>

      <p className="text-gray-500 text-center mt-2">
        Login to your Tiles Gallery account
      </p>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border rounded-lg p-3 outline-none focus:border-[#B87955]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full border rounded-lg p-3 outline-none focus:border-[#B87955]"
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}

        {/* Email Login Button */}
        <button
          type="submit"
          disabled={loading || googleLoading}
          className="w-full bg-[#24231F] text-white py-3 rounded-lg hover:bg-[#B87955] transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={googleLoading || loading}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 font-semibold transition hover:bg-gray-100 disabled:opacity-50"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="h-5 w-5"
          />

          {googleLoading
            ? "Connecting to Google..."
            : "Continue with Google"}
        </button>

      </form>

      {/* Register Link */}
      <p className="text-center mt-6 text-gray-600">
        Do not have an account?{" "}

        <Link
          href="/register"
          className="text-[#B87955] font-semibold"
        >
          Register
        </Link>
      </p>

    </div>
  );
}

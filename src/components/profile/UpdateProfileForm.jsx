"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();

  const [name, setName] = useState(user.name || "");
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        setMessage(error.message || "Profile update failed!");
        return;
      }

      setMessage("Profile updated successfully!");
      router.refresh();
      router.push("/my-profile");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Update Profile
      </h1>

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Your Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Profile Image URL
          </label>

          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-lg border p-3"
          />
        </div>

        {message && <p>{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </main>
  );
}
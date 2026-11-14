import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";

async function MyProfileContent() {
  await connection();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="mt-6">
        <img
          src={user.image || "/default-avatar.png"}
          alt="Profile"
          className="h-24 w-24 rounded-full object-cover"
        />

        <h2 className="mt-4 text-xl font-semibold">
          {user.name}
        </h2>

        <p>{user.email}</p>

        <p className="mt-2 text-sm text-gray-500">
          Account ID: {user.id}
        </p>
      </div>

      <a
        href="/my-profile/update"
        className="mt-6 inline-block rounded bg-black px-5 py-3 text-white"
      >
        Update Profile
      </a>
    </main>
  );
}

export default function MyProfilePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading profile...
        </div>
      }
    >
      <MyProfileContent />
    </Suspense>
  );
}
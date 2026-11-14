import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

async function UpdateProfileContent() {
  await connection();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <UpdateProfileForm user={session.user} />
  );
}

export default function UpdateProfilePage() {
  return (
    <Suspense fallback={<p className="p-8">Loading...</p>}>
      <UpdateProfileContent />
    </Suspense>
  );
}
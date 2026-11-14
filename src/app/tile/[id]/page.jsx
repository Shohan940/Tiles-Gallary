
import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { connection } from "next/server";
import TileDetails from "@/components/tile-details/TileDetails";

async function getTile(id) {
  try {
    const response = await fetch(
      `https://tiles-gallary-server.onrender.com/tiles/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function TileContent({ params }) {
  // Wait for an actual request
  await connection();

  // Check user session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect if user is not logged in
  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const tile = await getTile(id);

  if (!tile || !tile.id) {
    notFound();
  }

  return <TileDetails tile={tile} />;
}

export default function TileDetailsPage({ params }) {
  return (
    <main className="container mx-auto py-16">
      <Suspense fallback={<p>Loading tile details...</p>}>
        <TileContent params={params} />
      </Suspense>
    </main>
  );
}

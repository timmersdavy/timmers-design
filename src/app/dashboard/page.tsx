import { redirect } from "next/navigation";
import { requireSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import RequestList from "./RequestList";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const authenticated = await requireSession();
  if (!authenticated) {
    redirect("/login");
  }

  const requests = await prisma.request.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Aanvragen</h1>
        <LogoutButton />
      </div>
      <RequestList
        requests={requests.map((r) => ({
          ...r,
          createdAt: r.createdAt.toISOString(),
        }))}
      />
    </main>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const password = body?.password;

  // TIJDELIJKE DEBUG-LOG — verwijderen zodra login-probleem is opgelost.
  console.log("[login-debug] ontvangen:", JSON.stringify(password), "lengte:", password?.length);
  console.log(
    "[login-debug] verwacht (DASHBOARD_PASSWORD):",
    JSON.stringify(process.env.DASHBOARD_PASSWORD),
    "lengte:",
    process.env.DASHBOARD_PASSWORD?.length
  );

  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "Onjuist wachtwoord" }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ ok: true });
}

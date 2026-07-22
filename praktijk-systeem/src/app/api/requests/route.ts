import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requestSchema } from "@/lib/validation";
import { requireSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Ongeldige gegevens" },
      { status: 400 }
    );
  }

  const request = await prisma.request.create({
    data: {
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      service: parsed.data.service,
      message: parsed.data.message || null,
    },
  });

  return NextResponse.json({ id: request.id }, { status: 201 });
}

export async function GET() {
  const session = await requireSession();
  if (!session) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  const requests = await prisma.request.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ requests });
}

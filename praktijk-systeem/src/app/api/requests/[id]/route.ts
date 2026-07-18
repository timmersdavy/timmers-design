import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/auth";

const statusSchema = z.object({
  status: z.enum(["NIEUW", "INGEPLAND", "AFGEHANDELD"]),
});

export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const session = await requireSession();
  if (!session) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = statusSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Ongeldige status" }, { status: 400 });
  }

  const updated = await prisma.request.update({
    where: { id },
    data: { status: parsed.data.status },
  });

  return NextResponse.json({ request: updated });
}

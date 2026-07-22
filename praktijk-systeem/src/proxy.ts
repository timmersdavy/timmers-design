import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "praktijk_session";

export function proxy(request: NextRequest) {
  const hasCookie = request.cookies.has(COOKIE_NAME);

  if (!hasCookie) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

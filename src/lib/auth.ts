import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "praktijk_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 1 week

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET ontbreekt in de omgeving");
  return secret;
}

function sign(value: string): string {
  const hmac = crypto.createHmac("sha256", getSecret());
  hmac.update(value);
  return hmac.digest("hex");
}

function createToken(): string {
  const payload = `ok.${Date.now()}`;
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

function verifyToken(token: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [marker, timestamp, signature] = parts;
  const payload = `${marker}.${timestamp}`;
  const expected = sign(payload);
  const valid =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!valid) return false;

  const age = (Date.now() - Number(timestamp)) / 1000;
  return age >= 0 && age <= MAX_AGE_SECONDS;
}

export async function createSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, createToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function requireSession(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export function checkPassword(password: string): boolean {
  const expected = process.env.DASHBOARD_PASSWORD;
  if (!expected) throw new Error("DASHBOARD_PASSWORD ontbreekt in de omgeving");
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export { COOKIE_NAME };

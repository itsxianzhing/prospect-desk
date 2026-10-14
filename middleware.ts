import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.startsWith("/_next") || path === "/favicon.ico") return NextResponse.next();
  if (path === "/login") { const response=NextResponse.next(); response.headers.set("x-pathname", path); return response; }
  if (!request.cookies.get("prospectdesk_session")) return NextResponse.redirect(new URL("/login", request.url));
  const response = NextResponse.next();
  response.headers.set("x-pathname", path);
  return response;
}
export const config = { matcher: ["/((?!api/auth).*)"] };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("isAuthenticated")?.value;

  // Define paths that don't require authentication
  const publicPaths = ["/signin"];

  // Check if the current path is public
  const isPublicPath = publicPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  if (!isLogin && !isPublicPath) {
    // Redirect unauthorized users to the login page
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isLogin && isPublicPath) {
    // Redirect authenticated users away from public paths (e.g., login)
    return NextResponse.redirect(new URL("/shops", request.url));
  }

  return NextResponse.next();
}
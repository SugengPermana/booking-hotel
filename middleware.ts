import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const ProtectRoutes = ["/myreservation", "/checkout", "/admin"];

export async function middleware(request: NextRequest) {
  const session = await auth();
  const role = session?.user?.role;
  const isLoggedIn = !!role;
  const { pathname } = request.nextUrl;

  // ✅ Hanya proses route yang dilindungi
  const isProtected = ProtectRoutes.some((route) => pathname.startsWith(route));

  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// ✅ Matcher: jalankan middleware di semua route
// kecuali API routes, file statis, favicon, sitemap, robots.txt
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

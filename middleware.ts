import { NextResponse } from "next/server";
import { auth } from "./auth"; // Auth.js middleware helper

const ProtectRoutes = ["/myreservation", "/checkout", "/admin"];

export default auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const role = req.auth?.user?.role;
  const isLoggedIn = !!role;

  const isProtected = ProtectRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // ⛔ Belum login, akses route terproteksi
  if (!isLoggedIn && isProtected) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // ⛔ Sudah login tapi bukan admin, akses /admin
  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ⛔ Sudah login tapi buka /signin
  if (isLoggedIn && pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

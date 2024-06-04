import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }

  if (role === "USER" && pathname.startsWith("/dashboard/user")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:page*",
};

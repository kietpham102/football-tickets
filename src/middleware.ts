import { clerkMiddleware } from "@clerk/nextjs/server";

// Export a default middleware function that uses Clerk
export default clerkMiddleware();

export const config = {
  matcher: [
    // Exclude static files and favicon
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // Include root route
    "/",
    // Include API routes
    "/(api|trpc)(.*)"
  ],
}; 
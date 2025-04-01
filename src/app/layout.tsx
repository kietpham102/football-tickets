import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/store";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Football Tickets - Find and Book Match Tickets",
  description: "Browse and book tickets for upcoming football matches across top leagues in Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t py-6 md:py-8">
              <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} Football Tickets. All rights reserved. Demo project.
                </p>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

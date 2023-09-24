import NavBar from "@/app/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Sample Project to Learn Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

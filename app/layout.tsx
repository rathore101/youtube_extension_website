import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floatube - YouTube Floating Player Extension",
  description: "Official web portal and Privacy Policy for Floatube YouTube Floating Player Extension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}

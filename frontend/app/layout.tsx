import type { Metadata } from "next";
import "./globals.css";
import { LoadingProvider } from "../context/LoadingContext";

export const metadata: Metadata = {
  title: "EduVerse",
  description: "2.5D metaverse application for education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <LoadingProvider>
        {children}
        </LoadingProvider>
      </body>
    </html>
  );
}

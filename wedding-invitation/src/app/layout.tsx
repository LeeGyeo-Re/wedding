import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "A special invitation to our wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

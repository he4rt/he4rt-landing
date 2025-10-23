import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "He4rt Developers",
  description:
    "Uma comunidade de desenvolvedores ajudando os iniciantes do mundo da programação. A He4rt Developers já está formando várias mentes brilhantes que sairam do zero e passaram pro intermediário/avançado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}

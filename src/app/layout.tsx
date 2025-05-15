import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victoria Lu: UI Engineer",
  description: "Frontend engineer with 3 years of experience building web components on Ember and React, supporting 800+ million sales professionals. Drove a11y efforts and spotlight initiatives for women in tech. Holds a Bachelors and MPS in Information Sciences, focusing on UX/UI design and data science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

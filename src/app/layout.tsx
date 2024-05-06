import "~/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Animals Gallery",
  description: "Generated Roberto Bonnelly",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}><TopNav />{children}</body>
    </html>
    </ClerkProvider>
  );
}

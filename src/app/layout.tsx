import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from "next/font/google";
import { TopNav } from "./_components/topnav";
import { ourFileRouter } from "./api/uploadthing/core";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";


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
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}><TopNav />{children}</body>
    </html>
    </ClerkProvider>
  );
}

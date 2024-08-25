// import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import APP from "~/constants/configs/app";
import "~/constants/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP.name,
  description: APP.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/** Vercel Analytics */}
        {/* <Analytics /> */}
        {/**Loading Bar */}
        <NextTopLoader />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import 'remixicon/fonts/remixicon.css';
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "KMX | Portfolio",
  description: "Made by KMX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

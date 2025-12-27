import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const fontGeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const fontGeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Buscapet",
  description: "A plataforma definitiva para encontrar o pet ideal para você.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontGeistSans.variable} ${fontGeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

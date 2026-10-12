import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Render — profile cards worth posting",
  description: "Turn an X, LinkedIn, GitHub or Instagram handle into a polished share card in seconds.",
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">
        {`try {
  const theme = localStorage.getItem("render-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = theme === "dark" ? "#171715" : "#fafaf7";
} catch (error) {
  console.warn("Render could not read the color theme preference.", error);
  document.documentElement.dataset.theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}`}
      </Script>
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

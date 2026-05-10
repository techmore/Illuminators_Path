import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  metadataBase: new URL("https://illuminators-path.vercel.app"),
  title: {
    default: "Illuminators' Path",
    template: "%s | Illuminators' Path"
  },
  description:
    "From Intellectuals to Active Listening and Presence - Inspired by David Brooks.",
  openGraph: {
    title: "Illuminators' Path",
    description:
      "A guided path to becoming an Illuminator: curious, present, and life-giving in every conversation.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} min-h-screen font-sans`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col light-field">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

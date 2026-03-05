import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usman Ghani | Full-Stack Developer & AI Engineer",
  description:
    "Full-Stack Developer and AI Engineer with 3+ years of experience building complete web applications and production-grade AI systems.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "LangChain",
    "FastAPI",
    "TypeScript",
  ],
  authors: [{ name: "Usman Ghani" }],
  openGraph: {
    title: "Usman Ghani | Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer and AI Engineer portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Ghani | Full-Stack Developer & AI Engineer",
    description: "Full-Stack Developer and AI Engineer portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0F172A",
              color: "#F1F5F9",
              border: "1px solid #1E293B",
            },
          }}
        />
      </body>
    </html>
  );
}

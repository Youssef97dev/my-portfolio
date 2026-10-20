import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youssef Moussafi — Développeur Full Stack | Next.js • NestJS • PostgreSQL",
  description:
    "Portfolio de Youssef Moussafi, Développeur Full Stack avec plus de 5 ans d'expérience dans la conception d'applications web modernes (React.js, Next.js, Node.js, NestJS, PostgreSQL).",
  keywords: [
    "Youssef Moussafi",
    "Développeur Full Stack",
    "Next.js Developer",
    "NestJS",
    "React.js",
    "TypeScript",
    "PostgreSQL",
    "Casablanca",
    "Maroc"
  ],
  authors: [{ name: "Youssef Moussafi" }],
  openGraph: {
    title: "Youssef Moussafi — Développeur Full Stack",
    description:
      "Plus de 5 ans d'expérience en conception et déploiement d'applications web haute performance.",
    url: "https://youssefmoussafi.vercel.app",
    siteName: "Youssef Moussafi Portfolio",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] bg-grid-dots">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/content/education";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Developer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Odoo developer and full-stack engineer building ERP modules, Python backends, and web systems.",
  openGraph: {
    title: `${site.name} — Developer`,
    description:
      "Odoo developer and full-stack engineer building ERP modules, Python backends, and web systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>
        <div className="shell">
          <SiteHeader />
          <main className="main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

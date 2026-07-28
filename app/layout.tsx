import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DevConsoleHint from "@/components/DevConsoleHint";
import CommandPalette from "@/components/CommandPalette";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Developer`,
    template: `%s · ${site.name}`,
  },
  description:
    "Odoo developer and full-stack engineer. ERP modules, Python backends, and web products.",
  openGraph: {
    title: `${site.name} — Developer`,
    description:
      "Odoo developer and full-stack engineer. ERP modules, Python backends, and web products.",
    type: "website",
    url: site.url,
    siteName: site.name,
  },
};

const themeBoot = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='dark'&&t!=='light')t='light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      data-scroll-behavior="smooth"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <ThemeProvider>
          <div className="shell">
            <DevConsoleHint />
            <CommandPalette />
            <SiteHeader />
            <main className="main">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomRainbowKitProvider from "@/components/shared/customRainbowKit";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { GTM_ID } from '@/utils/gtm';
import { PageViewTracker } from '@/components/analytics/page-view-tracker';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://staminadev.com/howtoblockchain'),
  title: "How To Blockchain by Stamina - Votre guide pour découvrir la blockchain",
  description: "Découvrez la blockchain et le Web3 de manière pratique et sécurisée. Créez votre wallet, obtenez vos premières cryptos et NFTs gratuitement sur un réseau de test.",
  openGraph: {
    title: "How To Blockchain by Stamina - Votre guide pour découvrir la blockchain",
    description: "Découvrez la blockchain et le Web3 de manière pratique et sécurisée. Créez votre wallet, obtenez vos premières cryptos et NFTs gratuitement sur un réseau de test.",
    url: 'https://staminadev.com/howtoblockchain',
    siteName: 'How To Blockchain by Stamina',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How To Blockchain by Stamina",
    description: "Découvrez la blockchain et le Web3 de manière pratique et sécurisée.",
    creator: '@La_Kaarm',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            `,
          }}
        />
        <Script
          id="gtm-load"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomRainbowKitProvider>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <PageViewTracker />
                {children}
              </div>
              <Footer />
            </div>
          </CustomRainbowKitProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
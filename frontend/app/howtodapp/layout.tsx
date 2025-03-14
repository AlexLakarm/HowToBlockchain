import { Metadata } from "next";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Application Décentralisée (DApp) - Guide Pratique | How To Blockchain",
  description: "Découvrez comment utiliser une application décentralisée (DApp) avec notre guide pratique. Achetez des tokens et des NFTs sur le testnet Ethereum.",
  openGraph: {
    type: 'article',
    url: 'https://staminadev.com/howtoblockchain/howtodapp',
    title: 'Application Décentralisée (DApp) - Guide Pratique',
    description: 'Découvrez comment utiliser une application décentralisée (DApp) avec notre guide pratique. Achetez des tokens et des NFTs sur le testnet Ethereum.',
  },
  keywords: 'dapp, application décentralisée, web3, smart contract, ethereum, testnet, tokens, NFT, blockchain',
};

export default function HowToDappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
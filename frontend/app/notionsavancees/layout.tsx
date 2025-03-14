import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notions Avancées Blockchain - Guide Complet | How To Blockchain',
  description: 'Maîtrisez les concepts avancés de la blockchain : marketcap, stablecoins, CEX vs DEX, tokens ERC20 et NFTs. Guide approfondi pour investisseurs.',
  openGraph: {
    type: 'article',
    url: 'https://staminadev.com/howtoblockchain/notionsavancees',
    title: 'Notions Avancées Blockchain - Guide Complet',
    description: 'Maîtrisez les concepts avancés de la blockchain : marketcap, stablecoins, CEX vs DEX, tokens ERC20 et NFTs. Guide approfondi pour investisseurs.',
  },
  keywords: 'blockchain avancée, marketcap, stablecoin, CEX, DEX, ERC20, ERC721, NFT, DeFi, trading crypto',
};

export default function NotionsAvanceesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
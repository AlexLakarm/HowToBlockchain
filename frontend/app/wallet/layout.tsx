import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créer son Wallet Crypto - Guide étape par étape | How To Blockchain',
  description: 'Apprenez à créer et sécuriser votre portefeuille crypto (wallet) en toute sécurité. Guide détaillé pour débutants avec Rabby Wallet et Phantom.',
  openGraph: {
    type: 'article',
    url: 'https://staminadev.com/howtoblockchain/wallet',
    title: 'Créer son Wallet Crypto - Guide étape par étape',
    description: 'Apprenez à créer et sécuriser votre portefeuille crypto (wallet) en toute sécurité. Guide détaillé pour débutants avec Rabby Wallet et Phantom.',
  },
  keywords: 'wallet crypto, portefeuille numérique, rabby wallet, phantom wallet, ethereum wallet, solana wallet, création wallet, sécurité crypto',
};

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
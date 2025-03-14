import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Obtenir des Cryptos Gratuites - Testnet Ethereum | How To Blockchain',
  description: 'Apprenez à obtenir et utiliser des cryptomonnaies gratuites sur le réseau de test Ethereum (testnet). Guide pratique pour débuter sans risque.',
  openGraph: {
    type: 'article',
    url: 'https://staminadev.com/howtoblockchain/freecrypto',
    title: 'Obtenir des Cryptos Gratuites - Testnet Ethereum',
    description: 'Apprenez à obtenir et utiliser des cryptomonnaies gratuites sur le réseau de test Ethereum (testnet). Guide pratique pour débuter sans risque.',
  },
  keywords: 'crypto gratuite, testnet ethereum, faucet ethereum, eth gratuit, crypto débutant, test blockchain, holesky testnet',
};

export default function FreeCryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concepts Blockchain - Comprendre les bases de la blockchain | How To Blockchain',
  description: 'Découvrez les concepts fondamentaux de la blockchain : décentralisation, cryptographie, consensus. Guide complet pour comprendre la technologie blockchain.',
  openGraph: {
    type: 'article',
    url: 'https://staminadev.com/howtoblockchain/concepts',
    title: 'Concepts Blockchain - Comprendre les bases de la blockchain',
    description: 'Découvrez les concepts fondamentaux de la blockchain : décentralisation, cryptographie, consensus. Guide complet pour comprendre la technologie blockchain.',
  },
  keywords: 'blockchain, concepts blockchain, cryptographie, décentralisation, consensus, web3, crypto, bitcoin, ethereum',
};

export default function ConceptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
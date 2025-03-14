/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function LancezVousPage() {
  const [copiedEVM, setCopiedEVM] = useState(false);
  const [copiedSOL, setCopiedSOL] = useState(false);

  const copyToClipboard = async (text: string, type: 'EVM' | 'SOL') => {
    await navigator.clipboard.writeText(text);
    if (type === 'EVM') {
      setCopiedEVM(true);
      setTimeout(() => setCopiedEVM(false), 2000);
    } else {
      setCopiedSOL(true);
      setTimeout(() => setCopiedSOL(false), 2000);
    }
  };

  const formatAddress = (address: string, start: number = 6, end: number = 4) => {
    return `${address.slice(0, start)}...${address.slice(-end)}`;
  };

  return (
    <main className="container mx-auto">
      <HeaderMain />
      <div className="py-8 px-4">
        <div className="relative max-w-2xl mx-auto">
          {/* Bouton Retour */}
          <div className="absolute -left-[160px] -top-[0px]">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
            </Link>
          </div>

          {/* Contenu principal */}
          <div>
            <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-center mb-8`}>
              Vous êtes prêts ? Lancez-vous !
            </h1>

            <div className="space-y-8">
              <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify`}>
                Maintenant que tous les concepts clés ont été abordés, nous allons pouvoir passer à la pratique en achetant 
                vos premières cryptos et en utilisant des protocoles. Le processus qui amène un utilisateur à réaliser ses 
                premiers achats de crypto et ses premières transactions est appelé <span className="font-medium text-foreground">"onboarding"</span>.
              </p>

              <div className="space-y-6">
                <h2 className={`${quicksand.className} text-2xl font-bold`}>
                  Deux façons de commencer :
                </h2>

                {/* Option 1: CEX */}
                <div className="space-y-4">
                  <h3 className={`${quicksand.className} text-xl font-semibold`}>
                    1. Via une plateforme centralisée (CEX)
                  </h3>
                  <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify`}>
                    Les plateformes d'échange centralisées sont le moyen le plus simple pour débuter. Les plus reconnues sont :
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-purple-500/50 hover:border-purple-500"
                      onClick={() => window.open('https://www.binance.com/activity/referral-entry/CPA?ref=CPA_004PYN9DDE', '_blank')}
                    >
                      Binance
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-purple-500/50 hover:border-purple-500"
                      onClick={() => window.open('https://www.coinbase.com', '_blank')}
                    >
                      Coinbase
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Option 2: Web3 Wallet */}
                <div className="space-y-4">
                  <h3 className={`${quicksand.className} text-xl font-semibold`}>
                    2. Directement via un wallet web3
                  </h3>
                  <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify`}>
                    Pour vous lancer, nous vous orientons sans hésitation vers le wallet Phantom et la blockchain Solana, 
                    qui permet de réaliser des transactions rapides et à moindre frais, le tout dans un écosystème vibrant. 
                    Phantom vous permet également d'acheter directement des cryptomonnaies depuis l'interface du wallet, 
                    ce qui en fait une solution tout-en-un idéale pour débuter.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-purple-500/50 hover:border-purple-500"
                      onClick={() => window.open('https://phantom.app', '_blank')}
                    >
                      Télécharger Phantom
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Note importante */}
                <div className="bg-muted p-6 rounded-lg">
                  <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify`}>
                    <span className="font-medium text-foreground">Note importante :</span> Nous ne pouvons pas vous conseiller 
                    d'investir dans une cryptomonnaie en particulier. Gardez simplement en tête que vous allez avoir besoin 
                    de $SOL pour payer vos frais de transactions de quelques centimes.
                  </p>
                </div>

                {/* Nouvelle section pour les protocoles */}
                <div className="space-y-4">
                  <h3 className={`${quicksand.className} text-xl font-semibold`}>
                    Les applications incontournables de Solana
                  </h3>
                  <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify`}>
                    Une fois équipé, vous serez prêt pour utiliser les protocoles les plus populaires de l'écosystème Solana :
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-indigo-500/50 hover:border-indigo-500"
                      onClick={() => window.open('https://jup.ag/', '_blank')}
                    >
                      Jupiter (DEX)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-indigo-500/50 hover:border-indigo-500"
                      onClick={() => window.open('https://app.kamino.finance/', '_blank')}
                    >
                      Kamino (DeFi)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-indigo-500/50 hover:border-indigo-500"
                      onClick={() => window.open('https://www.drift.trade/', '_blank')}
                    >
                      Drift (Trading)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 border-indigo-500/50 hover:border-indigo-500"
                      onClick={() => window.open('https://www.tensor.trade/', '_blank')}
                    >
                      Tensor (NFTs)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Nouvelle section de soutien */}
                <div className="space-y-4 mt-12 pt-8 border-t">
                  <h3 className={`${quicksand.className} text-xl font-semibold text-center`}>
                    Vous souhaitez nous soutenir ?
                  </h3>
                  <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-center`}>
                    Si vous souhaitez soutenir nos efforts de démocratisation de la blockchain et de ses applications, 
                    vous pouvez faire un don sur l'une des adresses suivantes :
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm text-muted-foreground">Ethereum (EVM)</span>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-indigo-300/90 hover:border-indigo-500 font-mono"
                        onClick={() => copyToClipboard('0xbd0059Ae7c6ef3A8c1cb50E3B816717BB98EbD7c', 'EVM')}
                      >
                        {formatAddress('0xbd0059Ae7c6ef3A8c1cb50E3B816717BB98EbD7c')}
                        {copiedEVM ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm text-muted-foreground">Solana</span>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 border-indigo-300/90 hover:border-indigo-500 font-mono"
                        onClick={() => copyToClipboard('5n8bgfE55HfNr9nLYnd95JNBc7v8uc85U5eERshsrUcY', 'SOL')}
                      >
                        {formatAddress('5n8bgfE55HfNr9nLYnd95JNBc7v8uc85U5eERshsrUcY')}
                        {copiedSOL ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
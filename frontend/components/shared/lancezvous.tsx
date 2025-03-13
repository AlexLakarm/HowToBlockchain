/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from 'react';
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['500', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

type LancezVousProps = Record<string, never>;

const LancezVous: FC<LancezVousProps> = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        // Sauvegarde la position actuelle
        localStorage.setItem('scrollPosition', window.scrollY.toString());
        router.push(path);
    };
    return (
        <>
            {/* Séparateur */}
            <div className="w-full h-[1px] bg-gray-200 my-8 max-w-2xl mx-auto"></div>

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 space-y-8">
                {/* Titre */}
                <h2 className={`${quicksand.className} mt-8 text-2xl md:text-3xl font-bold`}>
                    Lancez-vous !
                </h2>
                
                {/* Explication */}
                <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                    Vous avez désormais acquis les compétences clés pour <span className="font-medium text-foreground">bien commencer</span>. 
                    Avec votre wallet téléchargé, vous êtes fin prêt pour démarrer votre aventure et utiliser vos premières 
                    applications web3.
                    <br /><br />
                    Découvrez désormais <span className="font-medium text-foreground">quels outils</span> utiliser pour acquerir vos <span className="font-medium text-foreground">premières cryptos</span> et commencer à vous lancer dans l'aventure.
                </p>

                {/* Bouton */}
                <Link href="/notionsavancees" onClick={() => handleNavigation('/notionsavancees')}>
                    <Button variant="default" className="font-bold mb-8">
                        <span className={quicksand.className}>
                            C'est parti !
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default LancezVous; 
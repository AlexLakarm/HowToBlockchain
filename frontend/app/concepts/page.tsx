/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Inter } from "next/font/google";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function ConceptsPage() {
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
              Les concepts fondamentaux
            </h1>

            <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed mb-8`}>
              La blockchain est un monde nouveau avec son propre vocabulaire et ses concepts uniques. 
              Sans nous perdre dans des détails trop techniques, voici les notions essentielles qu'il 
              vous faut comprendre pour faire vos premiers pas sereinement dans cet écosystème innovant.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                Qu'est-ce que la blockchain ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">       

                <h2 className={`${quicksand.className} text-xl font-bold my-4`}>Comprendre la blockchain : une révolution discrète mais profonde</h2>

                Aujourd'hui, pour garantir la valeur de la monnaie, d'un actif ou encore pour prouver que nous sommes bien propriétaires d'un bien, nous dépendons systématiquement d'intermédiaires de confiance :

<ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
  <li>Un <span className="font-medium text-foreground">notaire</span> pour attester que nous sommes propriétaires d'une maison ou d'un terrain,</li>
  <li>Une <span className="font-medium text-foreground">banque centrale</span> pour garantir qu'un billet de 20 euros vaut réellement 20 euros,</li>
  <li>Un <span className="font-medium text-foreground">expert en art</span> pour confirmer qu'un tableau est bien l'original,</li>
  <li>Une <span className="font-medium text-foreground">banque commerciale</span> pour certifier que les 100 euros affichés sur notre compte existent vraiment, même s'il ne s'agit que de lignes numériques.</li>
</ul>

Ce système fonctionne globalement bien, et il est profondément ancré dans nos habitudes. Mais il n'est pas exempt de failles :

<ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
  <li>Chaque intermédiaire prend une <span className="font-medium text-foreground">commission ou des frais</span>, parfois invisibles mais omniprésents dans chaque transaction du quotidien.</li>
  <li>Nous devons accorder notre <span className="font-medium text-foreground">confiance à des acteurs opaques</span>, dont le fonctionnement et les risques ne sont pas toujours visibles. La crise de 2008 en est l'illustration la plus connue : certaines banques détenaient des actifs insolvables, et ne disposaient pas des fonds suffisants pour permettre à leurs clients de retirer leur argent.</li>
  <li>Plus récemment, en 2023, l'affaire de la <span className="font-medium text-foreground">Silicon Valley Bank (SVB)</span> a montré une nouvelle fois les limites du système. Cette banque californienne, très exposée au secteur technologique, a subi une <span className="font-medium text-foreground">panique bancaire soudaine</span> : les clients se sont précipités pour retirer leurs fonds, et la banque n'a pas pu y faire face, entraînant sa faillite. Cela a rappelé à tous que même des institutions perçues comme solides peuvent vaciller en quelques jours.</li>
</ul>

Et puis, dans notre monde de plus en plus numérique, une autre problématique se pose : <span className="font-medium text-foreground">comment garantir la propriété d'un actif en ligne ?</span> Une photo, une œuvre numérique, ou même nos données personnelles : qui peut prouver que cela nous appartient vraiment ? Aujourd'hui, il n'existe pas de mécanisme simple pour cela.  

<div className="w-full h-[1px] bg-gray-200 my-8"></div>

<h2 className={`${quicksand.className} text-xl font-bold my-4`}>La blockchain : se passer d'intermédiaire, sans perdre la confiance</h2>

C'est ici qu'intervient la <span className="font-medium text-foreground">blockchain</span>. Son objectif est simple, mais profondément novateur : <span className="font-medium text-foreground">remplacer ces intermédiaires de confiance par un système décentralisé</span>, où la confiance est assurée par la technologie elle-même.<br /><br />

C'est d'ailleurs le point de départ du <span className="font-medium text-foreground">white paper de Bitcoin</span> (le document fondateur publié en 2008) : permettre des <span className="font-medium text-foreground">échanges pair à pair</span>, sans passer par une banque ou un organisme central. Le Bitcoin (BTC), première cryptomonnaie basée sur une blockchain publique, a permis de vulgariser ce concept et de le rendre accessible au plus grand nombre.<br /><br />

Mais concrètement, <span className="font-medium text-foreground">qu'est-ce que la blockchain ?</span>

Il s'agit d'un <span className="font-medium text-foreground">registre numérique partagé</span>, un immense <span className="font-medium text-foreground">livre de comptes</span> distribué entre des milliers d'ordinateurs à travers le monde. Chaque enregistrement (appelé un "bloc") est relié au précédent (literalement "chaine de blocs"), et sécurisé grâce à la <span className="font-medium text-foreground">cryptographie</span>. Ce registre est :

<ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
  <li><span className="font-medium text-foreground">Infalsifiable</span> : il est quasiment impossible de modifier une information une fois qu'elle est enregistrée.</li>
  <li><span className="font-medium text-foreground">Immuable</span> : aucune autorité centrale ne peut effacer ou réécrire l'historique.</li>
  <li><span className="font-medium text-foreground">Transparent</span> : tout est visible publiquement (sur une blockchain publique), ce qui permet de vérifier les transactions en toute indépendance.</li>
</ul>

Autrement dit, c'est une nouvelle manière de <span className="font-medium text-foreground">prouver et transmettre de la valeur</span>, sans avoir besoin d'un tiers de confiance traditionnel.

<div className="w-full h-[1px] bg-gray-200 my-8"></div>

<h2 className={`${quicksand.className} text-xl font-bold my-4`}>Des usages concrets, déjà en place</h2>

Cela ouvre la voie à des usages inédits, qui ne seraient pas possibles dans le système classique :

<ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
  <li><span className="font-medium text-foreground">Conserver de la valeur dans un wallet numérique</span>, sans passer par une banque. Un wallet (ou portefeuille numérique) permet de stocker des cryptomonnaies, mais aussi d'autres types d'actifs, sans intermédiaire.</li>
  <li><span className="font-medium text-foreground">Prouver la propriété d'un bien numérique</span> : image, œuvre d'art, objet dans un jeu vidéo… Ces actifs peuvent être échangés, vendus, achetés, et leur authenticité est garantie par la blockchain.</li>
  <li><span className="font-medium text-foreground">Participer à la gouvernance de projets collectifs</span>, grâce au vote décentralisé. On peut par exemple voter sur des décisions importantes dans une organisation, avec un système sécurisé, transparent et proportionnel à sa participation.</li>
  <li><span className="font-medium text-foreground">Créer des identités numériques vérifiables</span> sans dépendre d'un fournisseur centralisé.</li>
  <li><span className="font-medium text-foreground">Suivre l'origine et la traçabilité d'un produit</span> dans une chaîne d'approvisionnement (ex. : secteur agroalimentaire ou industrie du luxe).</li>
  <li><span className="font-medium text-foreground">Financer des projets de manière collective</span> (crowdfunding décentralisé), sans plateforme intermédiaire.</li>
</ul>

<div className="w-full h-[1px] bg-gray-200 my-8"></div>

<h2 className={`${quicksand.className} text-xl font-bold my-4`}>Vers un nouvel âge du web : le Web3</h2>

La blockchain s'inscrit dans une <span className="font-medium text-foreground">évolution naturelle du web</span> :

<ol className="list-decimal pl-6 mt-2 space-y-2 mb-4">
  <li><span className="font-medium text-foreground">Web 1.0</span> : nous pouvions <span className="font-medium text-foreground">lire</span> des contenus (années 90-2000).</li>
  <li><span className="font-medium text-foreground">Web 2.0</span> : nous avons commencé à <span className="font-medium text-foreground">interagir et publier</span> via les réseaux sociaux, blogs, forums.</li>
  <li><span className="font-medium text-foreground">Web3</span> : désormais, nous pouvons <span className="font-medium text-foreground">posséder nos données et nos créations</span>, sans dépendre d'une plateforme ou d'une entreprise.</li>
</ol>

C'est une révolution discrète, mais profonde. Dans un monde numérique où les données ont une valeur immense – et souvent captée par quelques géants du web –, la blockchain redonne le <span className="font-medium text-foreground">contrôle aux utilisateurs</span>.

<div className="w-full h-[1px] bg-gray-200 my-8"></div>

<h2 className={`${quicksand.className} text-xl font-bold my-4`}>Un futur déjà en marche</h2>

Aujourd'hui, la blockchain permet déjà de gérer son argent, d'investir, de jouer, de créer… Elle est souvent vue à travers le prisme de la spéculation, car ce fut l'un des premiers usages visibles. Mais son <span className="font-medium text-foreground">potentiel va bien au-delà</span>, et demain, elle sera partout — sans même que les utilisateurs s'en rendent compte.<br /><br />

Comme pour Internet ou le GPS, la <span className="font-medium text-foreground">technologie sous-jacente tend à s'effacer</span> pour ne laisser place qu'à l'expérience utilisateur. Nous consulterons des sites web, utiliserons des services, et derrière, nos interactions seront sécurisées et authentifiées par une blockchain… sans que nous ayons besoin de le savoir.<br /><br />

<div className="w-full h-[1px] bg-gray-200 my-8"></div>

La blockchain n'est pas une mode passagère, ni un simple outil de spéculation. C'est <span className="font-medium text-foreground">un changement d'infrastructure</span>, une nouvelle manière de faire circuler la confiance dans un monde numérique.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  Quelles applications concrètes ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                  La blockchain permet <span className="font-medium text-foreground">d'échanger de la valeur</span> sans intermédiaire mais aussi de prouver la <span className="font-medium text-foreground">propriété d'un actif numérique</span> ou de <span className="font-medium text-foreground">voter dans une communauté</span>. Elle trouve donc de nombreuses applications au-delà des cryptomonnaies :
                  <br /><br />
                  • <span className="font-medium text-foreground">Finance décentralisée (DeFi)</span> : prêts, épargne et trading sans intermédiaires bancaires. 
                  Exemples : Aave pour les prêts, Uniswap pour l'échange de tokens, Lido pour le staking
                  <br /><br />
                  • <span className="font-medium text-foreground">NFTs</span> : certificats numériques uniques pour l'art, la musique, les jeux. 
                  Exemples : OpenSea pour l'achat/vente, Blur pour le trading, Sorare pour les cartes de sport
                  <br /><br />
                  • <span className="font-medium text-foreground">Supply Chain</span> : traçabilité des produits de leur origine à leur destination. 
                  Exemples : VeChain pour le luxe, IBM Food Trust pour l'alimentaire
                  <br /><br />
                  • <span className="font-medium text-foreground">Vote électronique</span> : systèmes de vote transparents et inviolables. 
                  Exemples : Snapshot pour la gouvernance DAO, Vocdoni pour les élections
                  <br /><br />
                  • <span className="font-medium text-foreground">Identité numérique</span> : gestion sécurisée des données personnelles. 
                  Exemples : Civic pour la vérification d'identité, ENS pour les noms de domaine blockchain
                  <br /><br />
                  • <span className="font-medium text-foreground">Smart Contracts</span> : contrats auto-exécutables sans intermédiaires. 
                  Exemples : Chainlink pour l'oracle, Gnosis Safe pour la gestion multi-signatures
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  Qu'est-ce que ça change ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                  La <span className="font-medium text-foreground">Finance Décentralisée (DeFi)</span> illustre parfaitement le potentiel transformateur de la blockchain pour le secteur financier :
                  <br /><br />
                  • <span className="font-medium text-foreground">Innovation technologique</span> : La DeFi apporte de nouvelles solutions 
                  pour moderniser les services financiers. L'automatisation via les smart contracts permet d'optimiser de nombreux 
                  processus traditionnels.
                  <br /><br />
                  • <span className="font-medium text-foreground">Efficacité opérationnelle</span> : La technologie blockchain permet 
                  d'automatiser et de simplifier de nombreuses opérations financières, réduisant ainsi les coûts opérationnels 
                  et les délais de traitement.
                  <br /><br />
                  • <span className="font-medium text-foreground">Interopérabilité mondiale</span> : La blockchain facilite 
                  les transactions internationales en permettant des transferts rapides et sécurisés, 24/7, 
                  avec une traçabilité complète.
                  <br /><br />
                  • <span className="font-medium text-foreground">Transparence et sécurité</span> : Toutes les transactions 
                  sont enregistrées de manière immuable et vérifiable, renforçant ainsi la confiance dans le système. 
                  Cette transparence native contribue à la prévention des fraudes et à une meilleure gestion des risques.
                  <br /><br />
                  • <span className="font-medium text-foreground">Nouveaux modèles économiques</span> : La technologie blockchain 
                  ouvre la voie à de nouveaux produits et services financiers innovants, créant des opportunités de croissance 
                  pour l'ensemble du secteur.
                  <br /><br />
                  La blockchain représente ainsi une évolution majeure pour le secteur financier, permettant d'améliorer 
                  l'efficacité des services tout en renforçant la sécurité et la traçabilité des opérations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold">
                  Comment l'utiliser ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                  Tout utilisateur peut interagir avec une blockchain publique en y inscrivant des transactions. 
                  Pour cela, il suffit d'un <span className="font-medium text-foreground">wallet</span> (portefeuille numérique) comme Metamask ou Rabby.
                  <br /><br />
                  • <span className="font-medium text-foreground">Les Dapps (Applications Décentralisées)</span> : De nombreux sites web sont 
                  basés sur la blockchain. Contrairement aux applications traditionnelles qui stockent leurs données sur des 
                  serveurs privatifs (comme Amazon), les Dapps inscrivent leurs données critiques directement sur la blockchain, 
                  les rendant ainsi sécurisées et immuables. Cette approche élimine le point de centralisation au niveau du 
                  stockage des données.
                  <br /><br />
                  • <span className="font-medium text-foreground">Interaction via Wallet</span> : Pour utiliser une Dapp, vous connectez 
                  simplement votre wallet au site web. Vous pourrez alors valider des transactions sur la blockchain.
                  <br /><br />
                  • <span className="font-medium text-foreground">Le Gas (frais de transaction)</span> : Chaque transaction nécessite des frais 
                  appelés "gas", payés dans la cryptomonnaie native de la blockchain utilisée. Par exemple :
                  <br />
                  - <span className="font-medium text-foreground">Ethereum</span> : frais en ETH
                  <br />
                  - <span className="font-medium text-foreground">Solana</span> : frais en SOL
                  <br /><br />
                  Ces frais servent à rémunérer les validateurs qui maintiennent la sécurité du réseau.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold">
                  Quelles blockchains utiliser ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                  Dans ce tutoriel, nous nous concentrerons sur deux blockchains principales :
                  <br /><br />
                  • <span className="font-medium text-foreground">Ethereum</span> : La blockchain historique qui a révolutionné 
                  l'écosystème crypto en introduisant les smart contracts et la DeFi. Bien qu'étant la plus 
                  mature et la plus sécurisée, elle présente un inconvénient majeur pour les débutants : des 
                  frais de transaction (gas) très élevés qui peuvent atteindre plusieurs dizaines d'euros 
                  pour une simple transaction.
                  <br /><br />
                  • <span className="font-medium text-foreground">Solana</span> : Une blockchain plus récente, conçue pour 
                  être rapide et économique. Avec des frais de transaction infimes (moins de 0,01$) et une 
                  vitesse d'exécution très rapide, elle est particulièrement adaptée aux débutants. Son 
                  écosystème est en pleine expansion avec de nombreuses applications DeFi, NFT et Gaming.
                  <br /><br />
                  Il existe bien sûr de nombreuses autres blockchains notables :
                  <br /><br />
                  • <span className="font-medium text-foreground">Bitcoin</span> : La première et la plus connue, elle évolue 
                  avec de nouvelles possibilités comme les Ordinals (NFTs sur Bitcoin) et le Lightning Network
                  <br /><br />
                  • <span className="font-medium">Alternatives populaires</span> :
                  <br />
                  - <span className="font-medium text-foreground">Polygon</span> : Solution de scaling Ethereum avec des frais réduits
                  <br />
                  - <span className="font-medium text-foreground">Avalanche</span> : Rapide et compatible avec les outils Ethereum
                  <br />
                  - <span className="font-medium text-foreground">Celestia</span> : Nouvelle génération de blockchain modulaire
                  <br />
                  - <span className="font-medium text-foreground">Sonic, Abstract</span>, et bien d'autres émergent régulièrement avec leurs innovations propres
                  <br /><br />
                  Le choix de la blockchain dépendra de vos besoins : <span className="font-medium text-foreground">Ethereum</span> pour la sécurité maximale, 
                  <span className="font-medium text-foreground"> Solana</span> pour l'efficacité et les faibles coûts, ou d'autres pour des cas d'usage spécifiques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-semibold">
                  Qu'est-ce qu'une "crypto" ?
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                  Une cryptomonnaie est une <span className="font-medium text-foreground">forme de monnaie virtuelle</span> conçue pour être 
                  sécurisée et pseudonyme. Elle s'échange sur Internet grâce à la technologie blockchain, sans nécessiter 
                  d'intermédiaire comme une banque.
                  <br /><br />
                  Les cryptomonnaies présentent plusieurs avantages clés :
                  <ul className="list-disc pl-6 mt-2 space-y-2 mb-4">
                    <li><span className="font-medium text-foreground">Sécurité</span> : Utilisation de cryptographie avancée pour protéger les transactions</li>
                    <li><span className="font-medium text-foreground">Accessibilité</span> : Disponible pour tous avec une simple connexion Internet</li>
                    <li><span className="font-medium text-foreground">Transparence</span> : Transactions vérifiables par tous sur la blockchain</li>
                    <li><span className="font-medium text-foreground">Rapidité</span> : Transactions internationales en quelques minutes</li>
                  </ul>
                  Pourquoi ont-elles de la valeur ? Prenons l'exemple du <span className="font-medium text-foreground">Bitcoin</span>, la cryptomonnaie la plus connue. 
                  Comme toute monnaie, sa valeur repose sur la <span className="font-medium text-foreground">confiance</span> que les utilisateurs lui accordent. 
                  Cette confiance est renforcée par plusieurs facteurs :
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><span className="font-medium text-foreground">Rareté</span> : Le nombre total de Bitcoin est limité à 21 millions</li>
                    <li><span className="font-medium text-foreground">Sécurité</span> : Son réseau n'a jamais été piraté depuis sa création en 2009</li>
                    <li><span className="font-medium text-foreground">Adoption</span> : De plus en plus d'institutions et d'entreprises l'acceptent</li>
                    <li><span className="font-medium text-foreground">Décentralisation</span> : Aucune autorité centrale ne peut en créer davantage ou en bloquer l'utilisation</li>
                  </ul>
                  <br />
                  Le <span className="font-medium text-foreground">BTC</span> tire donc sa valeur de sa rareté, il est souvent assimilé à de <span className="font-medium text-foreground">l'or numérique</span>. Toutefois d'autres cryptomonnaies sont recherchées pour leur <span className="font-medium text-foreground">utilité</span> comme le <span className="font-medium text-foreground">$SOL</span> qui permet de payer des frais de transactions sur la blockchain <span className="font-medium text-foreground">Solana</span>.
                  <br /><br />
                  Il existe différentes catégories de cryptomonnaies :
                  <br /><br />
                  • <span className="font-medium text-foreground">Les cryptos majeures</span> : Bitcoin (BTC) et Ethereum (ETH) sont les plus connues 
                  et capitalisées. Elles ont prouvé leur résilience au fil des années.
                  <br /><br />
                  • <span className="font-medium text-foreground">Les stablecoins</span> : Des cryptomonnaies dont la valeur est indexée sur une devise 
                  traditionnelle (comme l'USDT ou l'USDC qui valent 1$). Ils servent de "refuge" pendant les périodes de volatilité.
                  <br /><br />
                  • <span className="font-medium text-foreground">Les cryptos utilitaires</span> : Utilisées pour accéder à des services spécifiques 
                  sur leur plateforme (comme payer des frais de transaction ou participer à la gouvernance).
                  <br /><br />
                  • <span className="font-medium text-foreground">Les meme coins</span> : Des cryptomonnaies créées initialement comme une blague 
                  ou basées sur des mèmes internet (comme le Dogecoin ou le Shiba Inu). Bien que certaines aient gagné en popularité, 
                  elles sont généralement considérées comme très risquées.
                  <br /><br />
                  <div className="bg-yellow-500/10 p-4 rounded-lg">
                    <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                      ⚠️ Important : Les cryptomonnaies sont des investissements risqués et volatils. Ne jamais investir plus 
                      que ce que vous êtes prêt à perdre et toujours faire vos propres recherches avant d'investir.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
} 
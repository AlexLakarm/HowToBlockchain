import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Génère un build statique
  images: {
    disableStaticImages: false,
    unoptimized: true,  // Nécessaire pour l'export statique
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,  // Recommandé pour les déploiements statiques
  poweredByHeader: false, // Supprime l'en-tête "X-Powered-By" pour des raisons de sécurité
  compress: true, // Compression des assets pour de meilleures performances
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      encoding: false,
    };
    return config;
  },
};

export default nextConfig;

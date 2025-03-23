export interface Route {
  path: string;
  priority: number;
  lastMod?: string; // Optionnel, pour les mises à jour spécifiques
}

export const routes: Route[] = [
  // Page d'accueil - priorité maximale
  { path: '/', priority: 1.0 },
  
  // Pages principales - priorité élevée
  { path: '/concepts', priority: 0.9 },
  { path: '/wallet', priority: 0.9 },
  { path: '/freecrypto', priority: 0.8 },
  { path: '/freenft', priority: 0.8 },
  { path: '/notionsavancees', priority: 0.8 },
  { path: '/go', priority: 0.8 },
  
  // Application décentralisée - priorité moyenne
  { path: '/howtodapp', priority: 0.8 },
  { path: '/howtodapp/crypto', priority: 0.7 },
  { path: '/howtodapp/nft', priority: 0.7 },
  
  // Pages supplémentaires (si vous en ajoutez plus tard)
  // { path: '/faq', priority: 0.6 },
  // { path: '/contact', priority: 0.6 },
];

// Exporter une fonction d'aide pour vérifier si un chemin est une route valide
export function isValidRoute(path: string): boolean {
  return routes.some(route => route.path === path);
} 
# Déploiement statique de How To Blockchain

Ce document explique comment générer et déployer la version statique du site How To Blockchain.

## Génération du build statique

Le projet est configuré pour générer un dossier `out` contenant tous les fichiers statiques nécessaires au déploiement. Pour générer ce dossier, suivez ces étapes :

1. Assurez-vous d'être dans le dossier `frontend` du projet :
```bash
cd frontend
```

2. Installez les dépendances si ce n'est pas déjà fait :
```bash
npm install
```

3. Générez le build statique :
```bash
npm run build
```

4. Un dossier `out` sera créé à la racine du dossier `frontend`. Ce dossier contient tous les fichiers statiques du site.

## Déploiement sur un hébergement

### Déploiement sur OVH ou tout autre hébergement statique

1. Téléchargez le contenu du dossier `out` sur votre serveur via FTP ou SSH.
2. Assurez-vous que le dossier racine de votre hébergement pointe vers ce dossier.

### Déploiement sur GitHub Pages

1. Si vous utilisez GitHub Pages, vous pouvez utiliser la commande suivante pour déployer :
```bash
npm install -g gh-pages
gh-pages -d out
```

### Déploiement sur Netlify ou Vercel

Ces plateformes peuvent déployer directement depuis votre dépôt GitHub. Configurez simplement :
- Commande de build : `npm run build`
- Dossier de publication : `out`

## Limitations du déploiement statique

Veuillez noter les limitations suivantes pour un déploiement statique :

- Les API routes ne fonctionneront pas
- Les fonctionnalités serveur comme `getServerSideProps` ne sont pas disponibles
- Les images sont non optimisées (paramètre `unoptimized: true` dans la configuration)
- Les fonctionnalités dynamiques nécessitant un serveur backend ne fonctionneront pas

## Configuration personnalisée

Si vous avez besoin de personnaliser davantage le déploiement, vous pouvez modifier les paramètres dans le fichier `next.config.ts`. 

# tuile&ardoise — site vitrine

Base de départ Astro + Pages CMS + Cloudflare Pages.

## Prérequis
- Node.js LTS
- Un compte GitHub
- Un compte Cloudflare
- Un compte Pages CMS (connexion GitHub)

## Tester sur ordinateur
```bash
npm install
npm run dev
```
Ouvrir l'adresse locale affichée dans le terminal.

## Construire le site
```bash
npm run build
```
Le site généré se trouve dans `dist/`.

## Pages CMS
Le fichier `.pages.yml` configure la collection « Réalisations » et l'ajout de photos dans `public/images/`.
Connexion via https://app.pagescms.org après avoir créé le dépôt GitHub et autorisé l'application Pages CMS.

## Déploiement Cloudflare Pages
Connecter le dépôt GitHub à Cloudflare Pages.
- Framework preset : Astro
- Build command : `npm run build`
- Build output directory : `dist`

Les commits sur la branche de production déclenchent un nouveau déploiement.

## À compléter avant publication
1. Remplacer `https://www.EXEMPLE-DOMAINE.fr` dans `astro.config.mjs`.
2. Le logo affiché dans l'en-tête est extrait de l'affiche fournie (`public/images/logo-tuile-ardoise-transparent.png`). Le recadrage original est conservé dans `public/images/logo-tuile-ardoise-original.png`. Le dessin de charpente et le lettrage ont été conservés, sans redessin. Pour un rendu parfaitement net à toutes les tailles, remplacer ultérieurement ce recadrage par le fichier source vectoriel s'il existe. Ajouter aussi une vraie photo principale dans `public/images/`.
3. Ajouter les coordonnées réelles de l'entreprise dans la page Contact.
4. Vérifier les textes, les prestations réellement proposées et la zone d'intervention.
5. Ajouter les mentions légales, la politique de confidentialité et les informations relatives aux cookies si des outils de mesure ou services tiers en déposent.
6. Tester le site sur téléphone et ordinateur.

## Important
Cette base est un prototype technique, pas un site prêt à publier. Les coordonnées et photos ne sont pas inventées. Le formulaire de contact n'est pas encore activé.

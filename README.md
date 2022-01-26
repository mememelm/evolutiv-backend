# evolutiv-backend

## Premier démarage
- Entrer dans le fichier et faire *npm install* (si npm n'est pas reconnu, installer nodejs sur votre pc lien: https://nodejs.org/en/download/)
- Modifier le fichier .env.exemple en .env
- Verifier votre serveur de base de données (on utilisera la dialecte 'MySql')

## Base de données
- Créer une base de données MySql au nom de votre choix
- Modifier ensuite BD_NAME de .env étant le nom de la base de données que vous venez de créer
- Modifier les élements **DATABASE** de .env selon la configuration de votre serveur base de données

## Lancement
- Faire *npm start* pour lance le serveur express de node
- Si **nodemon n'est pas reconnu**, installer nodemon qui est un live reload de node *npm i nodemon* (lien: https://www.npmjs.com/package/nodemon)
- Sequelize génèrera automatique les tables et attributs de la base de données

## A savoir
- Ce serveur lancera un cronJob spécifique toutes les minutes (example h: 1h23min00s => 1h24min00s)
- L'api key de IQAIR a une limite de 250 requête par jour. Il vous faudre regénérer une nouvelle clé et le copier dans .env *IQAIR_KEY*

## Documentation api
- https://documenter.getpostman.com/view/10400700/UVeAu8yv

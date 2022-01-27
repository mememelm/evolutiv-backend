# evolutiv-backend basic lunch

## Premier démarrage
- Entrer dans le fichier et faire *npm install* (si npm n'est pas reconnu, installer nodejs sur votre pc => lien: https://nodejs.org/en/download/)
- Modifier le fichier .env.exemple en .env
- Verifier votre serveur de base de données (on utilisera la dialecte 'MySql')

## Base de données
- Créer une base de données MySql au nom de votre choix
- Modifier ensuite BD_NAME de .env étant le nom de la base de données que vous venez de créer
- Modifier les élements **DATABASE** de .env selon la configuration de votre serveur base de données

## Lancement
- Faire *npm start* pour lance le serveur express de node
- Si **nodemon n'est pas reconnu**, installer nodemon qui est un live reload de node en faisant *npm i nodemon* (lien: https://www.npmjs.com/package/nodemon)
- Sequelize génèrera automatique les tables et attributs de la base de données (ici on aura qu'une seul table : **paris** qui stockera des réponses d'un cronJob)

## A savoir
- Ce serveur lancera un cronJob spécifique toutes les minutes (example h: 1h23min00s => 1h24min00s)
- L'api key de IQAIR a une limite de 250 requête par jour. Il vous faudre regénérer une nouvelle clé et le copier dans .env *IQAIR_KEY*

# evolutiv-backend with Docker
- Entrer dans le répertoire cloné et exécuter dans votre terminal : *docker-compose up -d*

# Unit test
- Executer *npm test* pour effectuer les tests unitaires (route)
=> Une erreur 500 est visible causée par le package 'cron' // debug dans le prochain release :) 

# Documentation api
- https://documenter.getpostman.com/view/10400700/UVeAu8yv

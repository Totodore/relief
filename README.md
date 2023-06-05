[![CodeQL](https://github.com/Totodore/relief/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/Totodore/relief/actions/workflows/github-code-scanning/codeql)
[![CI](https://github.com/Totodore/relief/actions/workflows/frontend-ci.yml/badge.svg)](https://github.com/Totodore/relief/actions/workflows/frontend-ci.yml)

# Manuel de déploiement
## Repository github : https://github.com/Totodore/relief

### Ce repo intègre une pipeline de CI/CD avec Github Actions
### Le projet est disponible à cette adresse : [relief.scriptis.fr](https://relief.scriptis.fr)

> ⚠️ Actuellement uniquement le frontend est développé, le manuel de déploiement comprends donc uniquement le frontend

# Lancement sans docker
* Installer [NodeJS](https://nodejs.org/en/download/) (version 18 minimum)
* Installer yarn : `npm install -g yarn`
* Installer les dépendances : `cd frontend` puis `yarn install`
* Lancer le serveur : `yarn start`
* Naviguer vers [http://localhost:4200](http://localhost:4200)

# Lancement avec docker compose
* Installer [Docker](https://docs.docker.com/get-docker/)
* Lancer la commande : `docker compose -f .\docker\docker-compose.front.yml up` ou `docker-compose -f .\docker\docker-compose.front.yml up` (selon les versions de docker) depuis la racine du projet
* Naviguer vers [http://localhost:8080](http://localhost:8080)


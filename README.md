# CARTES

Génération de figures cartographiques à partir de données géographiques.

⚠️  À ce stade ce dépôt rassemble des brouillons de cartes pour différentes librairies.

## 🌱 France

Génération de la carte des communes de France avec [Leaflet](https://leafletjs.com) (librairie JavaScript).

> Le code source traité dans cette section est disponible dans le répertoire `/leafletjs/france`.

### Visualisation de la carte

Dans un navigateur, ouvrir le fichier `index.html`.

### Ressources

Code [anct-carto](https://github.com/anct-carto/dgf_2020) de l'Agence nationale de la cohésion des territoires dans sa [version du 20 avril 2020](https://github.com/anct-carto/dgf_2020/tree/ed52e5ab994761b72fba0bfc7a4ca8defffadd4a).

Ce code présente les départements, les EPCI ainsi que les communes pour l'année 2020.

## 🐍 Tunisie

Génération de la carte de Tunisie en Python.

> Le code source traité dans cette section est disponible dans le répertoire `/python/tunisie`.

### Installation

Ce code a été réalisé en `Python 3.7`.

Pour l'installer, ouvrir un terminal bash et exécuter la commande suivante :

`pip install -r requirements.txt`

### Visualisation de la carte

Dans un terminal bash, exécuter la commande suivante :

`python tunisie.py`

La carte générée s'affiche alors dans une nouvelle fenêtre.
Fermer cette fenêtre arrêtera l'exécution du programme.

### Ressources

Source GeoJson utilisée : [data4tunisia.org - 2018](https://www.data4tunisia.org/fr/datasets/decoupage-de-la-tunisie-geojson-et-shapefile/)

> Les circonscriptions sont les délégations selon [catalog.industrie.gov.tn - 2015](http://catalog.industrie.gov.tn/dataset/tn-decoupage-administratif-de-la-tunisie/resource/1b7e3eba-b178-4902-83db-ef46f26e98a0).

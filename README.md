# OpenDataSphere

L’OpenDataSphère est une cartographie relationnelle des personnalités et organismes liés au milieu de la donnée ouverte. Elle permet d’étudier les liens entre les acteurs publics et privés à travers une logique hypertextuelle.

L’OpenDataSphère s'appuie sur l’Otlétosphère et en reprend la démarche d'ouverture. Le code source est ainsi ouvert et librement réutilisable (licence MIT), de même que les contenus (licence CC BY).

La [documentation](https://hyperotlet.github.io/otletosphere/) de l'Otletosphère est disponible pour faciliter les réutilisations.

## Prérequis

Téléchargez et installez l'environnement de développement [NodeJS](https://nodejs.org/en/download/).

Installez NPM et Gulp :

```
npm install -g npm
npm install gulp -g
```

Téléchargez un logiciel de serveur local comme [XAMP](https://www.apachefriends.org/fr/index.html) ou [MAMP](https://www.mamp.info/fr/). Configurez-le pour qu'il affiche le dossier correspondant à votre copie locale du dépôt.

## Installation

Récupération du dépôt :

```
git clone https://github.com/hyperotlet/otletosphere.git
```

Installation des dépendances nécessaires au bon fonctionnement du code sous-jacent :

```
npm i
```

## Utilisation 

Les données doivent être au format JSON. Sur le modèle de l'Otletosphère, l'OpenDataSphère utilise un tableur collaboratif Google Sheets exporté en JSON via un module complémentaire. Vous pouvez consulter le tableur à titre d'exemple en cliquant sur [ce lien](https://docs.google.com/spreadsheets/d/1AA8hrY5QqimlNR32KYQz2DqTlilNwRIc7Pv9fQQjMeo/edit?usp=sharing) (lecture seule).

L'import des données est expliqué à la page [« Inscrire données »](https://hyperotlet.github.io/otletosphere/fr/developpement/inscrire-donnees/) de la documentation de l'Otletosphère.

Démarrez le serveur local et affichez-le dans votre navigateur. Exemple (MAMP) : `http://localhost:8888` 

Avant de modifier ces fichiers, exécutez au préalable la commande suivante :

```
gulp watch
```

Visiter ensuite l'url du serveur local dans votre navigateur.

## Réutilisation

De par les besoins différents du projet OpenDataSphère, le code de l'Otletosphère a connu ici des modifications importantes. Par ailleurs, ce projet est étroitement lié à un contexte de réutilisation pédagogique ponctuelle. Si vous envisagez une réutilisation, nous vous conseillons donc plutôt de réutiliser l'Otletosphère, dont le code continuera d'être maintenu.

La version 2.0 de l'Otletosphère a été déposée [sur Zenodo](https://zenodo.org/record/3981189) ; le développement se poursuit [sur GitHub](https://github.com/hyperotlet/otletosphere).
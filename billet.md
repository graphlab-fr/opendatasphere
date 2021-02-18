# OpenDataSphère, un projet collaboratif autour de l’open data francophone

L’OpenDataSphère est un site portant sur l’open data, articulé autour d’une cartographie relationnelle des principaux acteurs francophones de ce champ. L'outil s'appuie sur le code de l’Otletosphère, une réalisation du programme de recherche ANR HyperOtlet.

Ce projet a été développé par les étudiants de la licence professionnelle MIND de l’IUT Bordeaux Montaigne dans le cadre de leur formation. C'est un travail collectif, de la veille initiale à la publication finale, en passant par l’harmonisation des données via des outils collaboratifs en ligne, mais aussi la définition d'une identité visuelle et l’intégration logicielle.

<!-- Compléter ici en fonction du lieu de publication, notamment pour préciser l'énonciation (qui écrit). -->

## Qu’est-ce que l’open data ?

### Définition de l’open data

Les open data, ou données ouvertes, sont des données auxquelles l’accès est totalement public et libre de juridique, au même titre que l’exploitation et la réutilisation (source : [lebigdata.fr](https://www.lebigdata.fr/)).

Elles sont définies par [l’Open Knowledge Foundation](https://fr.okfn.org/) en 2005 selon trois critères : la disponibilité (accessibilité des données), la réutilisation (et la redistribution), et la participation universelle à celles-ci.

### Législation encadrant l’open data

Même si l’article 15 de la Déclaration des Droits de l’Homme et du Citoyen de 1789 prévoit que “la Société a le juridique de demander compte à tout Agent public de son Administration”, les idées d’accès aux informations publiques et d’open data n’ont été pensées et développées que plus récemment  au sein de la législation française.

C’est en 1978, avec la Loi CADA, que l’idée d’un “juridique de savoir” a été instaurée et que la Commission d'Accès aux Documents Administratifs a été créée. Ce juridique d’accès permet à tout citoyen de consulter les informations publiques détenues par les administrations.

Ce n’est qu’en 2015 que la question du juridique de réutilisation des données a été traitée dans le cadre de la Loi Valter. En effet, jusque-là, les citoyens pouvaient avoir accès aux informations publiques mais ne pouvaient pas les utiliser.

Une nouvelle étape a été passée en 2016 avec la Loi pour une République Numérique qui impose, par défaut, le principe d’ouverture des données. Ce principe d’ouverture est imposé à toutes les administrations et collectivités locales de plus de 3500 habitants et 50 agents ainsi qu’aux entreprises délégataires d’une mission de service public. Étant applicable par défaut, rares sont les données publiques qui n’y sont pas soumises (source : [Datactivist](https://datactivist.coop/ardeche/rapport/partie2.html)).

## Développement du projet OpenDataSphère

L’OpenDataSphère a pour objectif d’offrir une visualisation simple et fluide des différents acteurs de l’open data francophone et de leurs relations.

Comme pour l’Otletosphère, il s’agit de rendre visible un réseau d’acteurs agissant dans le même domaine et avec la même volonté. L’OpenDataSphère est un outil en libre accès permettant à tout un chacun de parcourir et de découvrir quelques entités majeures de l’open data francophone, mais aussi de parcourir les différents liens qui les connectent les unes aux autres.

## Développement des différentes étapes du projet

L’OpenDataSphère a été élaborée et mise en œuvre par la LP MIND dans le cadre d’un cours portant sur l’archivage et le partage des données, sur une proposition d’Arthur Perret.

Ce travail de collaboration a débuté par la mise en place de la stratégie de veille, et de la découpe des thématiques en fonction des acteurs principaux. De l’open data francophone, nous avons décidé de nous concentrer sur les grands acteurs et les principaux organismes qui le composent et le développent.

Face aux différentes étapes et aux divers travaux devant être réalisés dans le cadre de ce projet, il a été nécessaire de diviser l’ensemble des étudiants en différents groupes avec, pour chacun, un objectif précis :

- un groupe “Données” s’est consacré à la création et à l'organisation d’une base de données
- un groupe “Intégration” s’est chargé de l'intégration de la base de données dans la structure de l’OpenDataSphère, et de spécifier des développements à réaliser via un cahier des charges
- un groupe “Art” s’est dédié à la charte graphique et la mise en forme du projet
- un groupe “Rédaction” s’est chargé de la rédaction en Markdown de la page “À propos” du projet, d'un README pour le dépôt de code, et de ce billet

## La base de données

Il a fallu dans un premier temps récolter des données représentant, au sens large, les différents acteurs du domaine de l’open data francophone que nous souhaitions faire apparaître sur notre projet final.

Pour ce faire, nous avons mis en place une veille “Pull” accélérée, consistant en une recherche de lien en lien à partir de grands acteurs connus, pour faire apparaître d’autres acteurs à travers leurs relations.

### La structuration des métadonnées

Notre base de données, hébergée sur Google Sheets, est structurée d’après un schéma de métadonnées exprimé via les entêtes de colonnes, chaque ligne représentant une entité.

![Structuration des données sur le document source](https://i.imgur.com/2W9WGIF.png)

Les métadonnées ont été choisies et ordonnées afin de pouvoir subdiviser les acteurs en catégories, pour leur attribuer des couleurs et icônes ultérieurement. Elles sont également utilisées pour l’affichage final de la “fiche individuelle” de chaque entité.

### Les relations

Les relations sont hébergées dans le même tableur Google Sheets que les entités, ordonnées par ligne : une ligne représente une relation.

![Structuration des liens sur le document source](https://i.imgur.com/6BkOqEL.png)

Les liens entre les différents acteurs représentent le pilier de ce projet, c’est pour cela que chaque acteur retenu est impliqué dans une relation, dont la nature est précisée et prouvée par un URL l’expliquant.

## Choix de mise en forme

En partant du modèle de l’Otletosphère, nous avons adapté la mise en forme des nœuds et des liens, mais pas seulement.

Les notions de **simplicité** et notre volonté de mettre en avant **l’accessibilité** du projet sont restées au cœur du travail de recherche autour de la mise en forme de l’OpenDataSphère.

### Des couleurs qui prennent en compte l’accessibilité

La prise en compte des règles d’accessibilité sur le Web offre à tous un accès égal au site, et au contenu qu’il propose.

Dans cette optique de compréhension et de lisibilité par tous.tes, deux outils d’accessibilité ont été utilisés avant le choix des couleurs.

- Pour tester les contrastes : [https://colourcontrast.cc](https://colourcontrast.cc/)
- Pour optimiser le choix de couleurs en fonction des différentes formes de daltonisme : [https://davidmathlogic.com/colorblind/](https://davidmathlogic.com/colorblind/)

### Une typographie simple

Concernant la mise en forme du texte, l’idée était de rester similaire à l’Otletosphère, déjà très efficace et simple, en se démarquant un peu dans l’originalité des typographies.

En effet, contrairement au projet de l’Otletosphère, nous avons voulu combiner des polices différentes pour créer un contraste entre l’interface et le contenu. L’utilisation d’une police distincte pour le logo lui confère une identité plus forte et le détache du reste du contenu. L’utilisation de Google Fonts nous a permis de tester des combinaisons pertinentes.

![Charte graphique de l’OpenDataSphère](https://i.imgur.com/sUzRLau.jpg)

### Des icônes intuitives

Afin de facilement identifier les différentes catégories d’acteurs dans le domaine de l’open data francophone, le choix a été fait de les représenter sous forme d’icônes sobres et facilement reconnaissables.

### Une mise en forme sobre mais unique

L’OpenDataSphère reprend le fond noir de l’Otletosphère, qui offre un bon contraste pour la lisibilité des informations. Elle développe néanmoins sa propre identité graphique, avec avant tout l’envie d’un résultat simple et lisible, et notamment des catégories colorées de manière accessible, facilement identifiables au premier coup d’œil.

<!-- Liste des auteurs ? -->
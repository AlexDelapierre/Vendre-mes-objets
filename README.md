# VendreMesObjets 🛒

**Application web de vente d’occasion – Frontend React TypeScript + API Node.js/MongoDB**

## 📋 Description

VendreMesObjets est une application web complète permettant aux utilisateurs de consulter, publier, modifier et supprimer des annonces d’objets d’occasion, dans un style proche de Leboncoin. Le projet est développé avec React TypeScript côté client et une API RESTful en Node.js connectée à une base MongoDB coté backend.

L’authentification sécurisée via JWT permet aux utilisateurs d’accéder à des fonctionnalités protégées. Les images des objets sont envoyées via `FormData` et stockées sur le serveur à l’aide de Multer.

## ✨ Fonctionnalités

### ✅ Fonctionnalités déjà mises en place :
- Authentification sécurisée (inscription, connexion, déconnexion)
- Ajout, modification et suppression d’objets à vendre (CRUD)
- Gestion des fichiers image avec upload via formulaire
- Affichage de toutes les annonces disponibles
- Affichage détaillé d’un objet (description, prix, image)
- Affichage conditionnel des boutons (Acheter / Modifier / Supprimer) selon l’utilisateur connecté
- Middleware de protection des routes
- Gestion des erreurs

### 🛠️ Fonctionnalités prévues :
- Interface responsive (mobile / tablette)
- Recherche ou filtrage des annonces
- Système de messagerie ou prise de contact

## 🧰 Technologies utilisées

- **Frontend** : React, TypeScript
- **Backend** : Node.js, Express
- **Base de données** : MongoDB avec Mongoose
- **Authentification** : JSON Web Token (JWT)
- **Gestion des fichiers** : Multer

## 🚀 Installation

```bash
git clone https://git@github.com:AlexDelapierre/Vendre-mes-objets.git
cd vendre-mes-objets
```

### Configuration du backend :
Créez un fichier .env dans le dossier backend avec vos variables (exemple : clé JWT, URI MongoDB, port...)

Lancez le serveur avec :

```bash
cd backend
npm install
npm start
```

### Lancement du frontend :
Ouvrez le fichier index.html dans votre navigateur, ou servez-le avec une extension de type Live Server.

## 📌 Évolutions envisagées

- Amélioration de l’UX/UI
- Mode admin pour gérer toutes les annonces
- Système de commentaires ou de notations
- Pagination ou lazy loading

## 👤 Auteur
Alexandre Delapierre – [LinkedIn](https://www.linkedin.com/in/alexandre-delapierre/)






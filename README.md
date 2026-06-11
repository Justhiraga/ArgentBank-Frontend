[README.md](https://github.com/user-attachments/files/28838864/README.md)
# 💳 ArgentBank Frontend

Une application bancaire moderne construite avec **React 19**, **Vite**, **Redux Toolkit** et **React Router v7**. Cette application frontend fournit une interface utilisateur complète pour la gestion des comptes bancaires.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-7.12.0-CA4245?logo=react-router&logoColor=white)

## ✨ Fonctionnalités

- 🏦 **Authentification utilisateur** - Connexion sécurisée avec JWT
- 💰 **Gestion de comptes** - Affichage et gestion des comptes bancaires
- 📊 **Transactions** - Visualisation des transactions par compte
- 👤 **Profil utilisateur** - Édition du profil utilisateur
- 🔐 **State management** - Redux Toolkit pour la gestion d'état
- 🛣️ **Routage avancé** - React Router v7 pour la navigation
- ⚡ **Performance optimale** - Vite pour un build ultra-rapide
- 📱 **Responsive design** - Interface adaptée à tous les appareils
- 🎨 **Design moderne** - Interface utilisateur professionnelle

## 📋 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Installation](#-installation)
- [Démarrage rapide](#-démarrage-rapide)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Configuration](#-configuration)
- [Architecture](#-architecture)
- [Pages principales](#-pages-principales)
- [Développement](#-développement)
- [Build pour production](#-build-pour-production)
- [API Integration](#-api-integration)
- [State Management](#-state-management)
- [Bonnes pratiques](#-bonnes-pratiques)
- [Contribution](#-contribution)

## 📖 À propos du projet

**ArgentBank** est une application bancaire frontend complète conçue pour :

- Démontrer les capacités d'une SPA (Single Page Application) moderne
- Gérer l'authentification et l'autorisation utilisateur
- Afficher et gérer les comptes et transactions bancaires
- Permettre la modification du profil utilisateur
- Intégrer une API backend (non incluse dans ce repository)

Ce projet est un **fork du projet pédagogique OpenClassrooms** et représente une application d'entreprise professionnelle.

## 🔧 Prérequis

- **Node.js** v16 ou supérieur
- **npm** ou **yarn**
- **Backend API** (ArgentBank Backend) en cours d'exécution

## 📥 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Justhiraga/ArgentBank-Frontend.git
cd ArgentBank-Frontend
cd ArgentBank-react
```

### 2. Installer les dépendances

Avec **npm** :
```bash
npm install
```

Ou avec **yarn** :
```bash
yarn install
```

### 3. Configuration de l'environnement (optionnel)

Créez un fichier `.env` à la racine du projet pour configurer l'API :

```env
VITE_API_URL=http://localhost:3001/api
```

## 🚀 Démarrage rapide

### Mode développement

Lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible à `http://localhost:5173`

Vite fournira un HMR (Hot Module Replacement) pour un développement rapide.

### Mode production

Générer un build optimisé pour la production :

```bash
npm run build
```

### Aperçu du build

Visualiser le build en local avant le déploiement :

```bash
npm run preview
```

### Linting

Vérifier la qualité du code :

```bash
npm run lint
```

## 📁 Structure du projet

```
ArgentBank-Frontend/
├── ArgentBank-react/
│   ├── src/
│   │   ├── assets/                 # Images, icônes, favicon
│   │   │   ├── img/
│   │   │   └── css/
│   │   ├── components/             # Composants réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AccountCard.jsx
│   │   │   ├── TransactionItem.jsx
│   │   │   └── [autres composants]
│   │   ├── pages/                  # Pages principales
│   │   │   ├── Home.jsx            # Page d'accueil
│   │   │   ├── Sign-in.jsx         # Page de connexion
│   │   │   └── User.jsx            # Page profil utilisateur
│   │   ├── store/                  # Redux configuration
│   │   │   ├── store.js            # Configuration du store
│   │   │   └── slices/             # Redux slices
│   │   │       ├── authSlice.js
│   │   │       ├── userSlice.js
│   │   │       └── [autres slices]
│   │   ├── main.jsx                # Point d'entrée React
│   │   └── index.css               # Styles globaux
│   ├── public/                     # Fichiers statiques
│   ├── index.html                  # Fichier HTML principal
│   ├── package.json                # Dépendances et scripts
│   ├── vite.config.js              # Configuration Vite
│   ├── eslint.config.js            # Configuration ESLint
│   └── README.md                   # Documentation du projet
└── [fichiers de configuration]
```

## 🛠️ Technologies utilisées

### Frontend Framework
- **React 19.2.0** - Bibliothèque UI principale
- **React DOM 19.2.0** - Rendu DOM
- **React Router 7.12.0** - Routage et navigation

### State Management
- **Redux Toolkit 2.11.2** - Gestion d'état simplifiée
- **React Redux 9.2.0** - Intégration React-Redux

### Build & Tooling
- **Vite 7.2.4** - Build tool ultra-rapide
- **ESLint 9.39.1** - Linter JavaScript
- **@vitejs/plugin-react** - Plugin React pour Vite

### Assets & UI
- **Font Awesome 4.7.0** - Icônes professionnelles
- **CSS3** - Styles modernes

### Development Tools
- **@types/react** - Types TypeScript pour React
- **@types/react-dom** - Types pour React DOM
- **eslint-plugin-react-hooks** - Linter pour les hooks React
- **eslint-plugin-react-refresh** - Linter pour React Refresh

## ⚙️ Configuration

### Vite (`vite.config.js`)

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### ESLint (`eslint.config.js`)

ESLint est configuré avec les règles React recommandées et les règles des hooks.

Pour exécuter le linting :
```bash
npm run lint
```

### Environment Variables

Variables d'environnement utiles (créer un fichier `.env.local`) :

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=ArgentBank
VITE_DEBUG=false
```

## 🏗️ Architecture

### Architecture MVC adaptée

L'application suit une architecture moderne avec :

```
Pages (Vues) → Components (Composants) → Store (Redux) → API (Backend)
```

### Flux de données

```
User Action → Dispatch Action → Reducer → Update State → Re-render Component
```

### Structure des pages

1. **Home.jsx** - Page d'accueil publique
2. **Sign-in.jsx** - Page d'authentification
3. **User.jsx** - Tableau de bord utilisateur avec profil et comptes

## 📄 Pages principales

### 1. Home (`/`)
- Page d'accueil publique
- Présentation des services
- Appel à l'action pour connexion

### 2. Sign-In (`/sign-in`)
- Formulaire d'authentification
- Validation des identifiants
- Redirection post-connexion

### 3. User (`/user`)
- Dashboard utilisateur
- Affichage du profil
- Liste des comptes bancaires
- Informations de transactions
- Édition du profil

## 💻 Développement

### Créer un nouveau composant

```jsx
// src/components/MyComponent.jsx
import './MyComponent.css';

export default function MyComponent({ title, data }) {
  return (
    <div className="my-component">
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
}
```

### Utiliser Redux

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export default function MyComponent() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);

  const handleClick = () => {
    dispatch(setUser(userData));
  };

  return (
    <div>
      <p>{user?.firstName}</p>
      <button onClick={handleClick}>Mise à jour</button>
    </div>
  );
}
```

### Créer une route

Les routes sont définies dans `src/main.jsx` :

```jsx
<Routes>
  <Route index element={<Home />} />
  <Route path="/sign-in" element={<SignIn />} />
  <Route path="/user" element={<User />} />
  <Route path="/new-route" element={<NewPage />} />
</Routes>
```

### Bonnes pratiques

1. **Composants** - Gardez-les petits et réutilisables
2. **Redux** - Utilisez des slices pour l'organisation
3. **Routing** - Groupez les routes logiquement
4. **CSS** - Utilisez un système de fichiers cohérent
5. **Linting** - Respectez les règles ESLint
6. **Naming** - Utilisez des noms explicites et cohérents

## 📦 Build pour production

Générer un build optimisé :

```bash
npm run build
```

Le build produit sera généré dans le dossier `dist/`.

### Optimisations incluses

- Minification et compression
- Tree-shaking des modules inutilisés
- Code splitting automatique
- Optimisation des assets
- Source maps pour le débogage

### Prévisualiser le build

```bash
npm run preview
```

## 🔌 API Integration

### Configuration de l'API

L'application communique avec une API backend. Créez un service API :

```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/user/profile`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};
```

### Authentification

L'authentification utilise les JWT tokens :

```javascript
// Stocker le token après connexion
localStorage.setItem('token', response.data.token);

// Utiliser le token dans les requêtes
const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` };
```

## 🗂️ State Management

### Redux Slices

Créez des slices pour organiser l'état :

```javascript
// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
```

### Utiliser le store

```javascript
// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  }
});
```

## ✨ Bonnes pratiques

### Performance

- Utilisez `React.memo()` pour les composants pure
- Optimisez les sélecteurs Redux avec `useSelector`
- Lazy-load les routes avec `React.lazy()`
- Utilisez le code splitting avec Vite

### Sécurité

- Stockez les tokens JWT de manière sécurisée
- Validez les données côté client et serveur
- Protégez les routes sensibles
- Utilisez HTTPS en production

### Maintenabilité

- Suivez la structure des dossiers
- Commentez le code complexe
- Utilisez des noms explicites
- Écrivez du code DRY (Don't Repeat Yourself)

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. **Fork** le repository
2. Créez une branche (`git checkout -b feature/NouvelleFonctionnalité`)
3. Committez vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/NouvelleFonctionnalité`)
5. Ouvrez une **Pull Request**

### Directives de contribution

- Respectez la structure du code existant
- Suivez les règles ESLint
- Testez votre code
- Documentez les nouvelles fonctionnalités
- Utilisez des messages de commit clairs

## 📚 Ressources utiles

### Documentation officielle
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

### Guides et tutoriels
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [React Hooks Patterns](https://react.dev/reference/react)
- [Vite Guide](https://vitejs.dev/guide/)

### Outils de développement
- [React DevTools](https://react-devtools-tutorial.vercel.app/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [VS Code Extensions](https://marketplace.visualstudio.com/)

## 🔗 Liens utiles

- **Backend Repository** : [ArgentBank-Backend](https://github.com/OpenClassrooms-Student-Center/ArgentBank-Backend)
- **Original Project** : [ArgentBank Frontend](https://github.com/OpenClassrooms-Student-Center/ArgentBank-Frontend)
- **OpenClassrooms** : [OpenClassrooms](https://openclassrooms.com/)

## 👤 Auteur

**Justhiraga**
- GitHub: [@Justhiraga](https://github.com/Justhiraga)
- Repository: [ArgentBank-Frontend](https://github.com/Justhiraga/ArgentBank-Frontend)

## 📄 License

Ce projet est sous license MIT. Consultez le fichier LICENSE pour plus de détails.

---

**Créé le**: 6 janvier 2026  
**Dernière mise à jour**: 9 mars 2026

**Stack Technologique** : React 19 | Vite | Redux Toolkit | React Router v7

Fait avec ❤️ par Justhiraga

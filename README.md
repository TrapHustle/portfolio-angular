# portfolio-angular
Portfolio personnel développé avec Angular 21 et Django REST Framework — Frontend dynamique connecté à une API REST avec gestion des projets, expériences, compétences et formulaire de contact.
# 💼 Portfolio — Triumph Kotchi

Portfolio personnel full-stack développé avec Angular 21 (frontend) et Django REST Framework (backend).

## 🛠️ Stack technique

- **Frontend** : Angular 21, TypeScript, SCSS
- **Backend** : Django 5, Django REST Framework
- **Base de données** : SQLite
- **Design** : Template Framer converti en composants Angular

## ✨ Fonctionnalités

- Profil dynamique depuis l'API Django
- Section Expériences, Projets, Éducation, Compétences
- Formulaire de contact
- Animation typewriter
- Layout sticky sidebar
- Thème sombre personnalisé
- Admin Django pour gérer le contenu

## 🚀 Lancer le projet

### Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
ng serve
```

## 📁 Structure
```
exam_angular/
├── backend/    ← Django REST API
└── frontend/   ← Angular 21
```

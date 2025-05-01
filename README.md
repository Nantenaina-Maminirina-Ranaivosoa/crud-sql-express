📚 CRUD App avec Express et SQLite
Ce projet est une petite application backend qui permet de Créer, Lire, Mettre à jour et Supprimer (CRUD) des articles de blog en utilisant Express.js et SQLite.

🚀 Fonctionnalités
GET /posts : récupérer tous les posts.

POST /posts : ajouter un nouveau post.

PUT /posts/:id : mettre à jour un post existant.

DELETE /posts/:id : supprimer un post existant.

📦 Installation
Clone le projet ou crée un nouveau dossier.

Ouvre un terminal dans le dossier et exécute :

bash
Copier le code
npm init -y
npm install express sqlite3 cors
Crée un fichier server.js et copie-colle le code fourni.

Lance ton serveur :

bash
Copier le code
node server.js
Le serveur sera accessible à l'adresse :
👉 http://localhost:5000

🛠 Structure du projet
bash
Copier le code
/crud-app
│
├── server.js       # Serveur Express + API CRUD
└── database.db     # (Créé automatiquement au lancement)
🗃 Base de données
Nom : database.db

Table : posts

id (INTEGER, PRIMARY KEY)

title (TEXT)

content (TEXT)

📩 Exemples de requêtes
Récupérer tous les posts
http
Copier le code
GET /posts
Ajouter un nouveau post
http
Copier le code
POST /posts
Content-Type: application/json

{
  "title": "Mon premier post",
  "content": "Contenu de mon premier article"
}
Modifier un post existant
http
Copier le code
PUT /posts/1
Content-Type: application/json

{
  "title": "Titre modifié",
  "content": "Contenu modifié"
}
Supprimer un post
http
Copier le code
DELETE /posts/1
🎯 Objectifs pédagogiques
Maîtriser les bases de Express.js.

Comprendre la manipulation de SQLite pour stocker des données.

Créer des routes d'API REST : GET, POST, PUT, DELETE.

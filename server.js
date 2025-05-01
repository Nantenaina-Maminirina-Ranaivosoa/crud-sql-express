// CRUD App avec Express + SQLite

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données', err);
    } else {
      console.log('Connecté à la base de données SQLite');
    }
  });

  // Créer la table si elle n'existe pas
db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
  )`);



  // Routes

// GET - Récupérer tous les posts
app.get('/posts', (req, res) => {
    db.all('SELECT * FROM posts', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
  });


   // POST - Créer un nouveau post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, title, content });
      }
    });
  });



// PUT - Modifier un post
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.run('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Post mis à jour' });
    }
  });
});


// DELETE - Supprimer un post
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM posts WHERE id = ?', id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Post supprimé' });
    }
  });
});


  // Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
  });


 
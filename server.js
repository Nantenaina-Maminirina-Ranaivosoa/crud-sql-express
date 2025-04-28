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
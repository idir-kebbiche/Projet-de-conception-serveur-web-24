// Import des modules nécessaires
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import database from './config/connexion.js';
import router1 from './routes/Résultats.js';
import router2 from './routes/Notes.js';
import router3 from './routes/Matériel.js';
import router4 from './routes/Examens.js';
import router5 from './routes/Étudiants.js';
import router6 from './routes/Enseignants.js';
import router7 from './routes/Emplois du temps.js';
import router8 from './routes/Cours.js';
import router9 from './routes/Classes.js';
import router10 from './routes/Absences.js';
import resultRules from './validations/Résultats.js';
import noteRules from './validations/Notes.js';
import materialRules from'./validations/Matériel.js';
import examRules from './validations/Examens.js';
import studentRules from './validations/Étudiants.js';
import enseignantRules from './validations/Enseignants.js';
import timetableRules from'./validations/Emplois du temps.js';
import coursRules from './validations/Cours.js';
import classeRules from './validations/Classes.js';
import absenceRules from './validations/Absences.js';
import routeAuth from './routes/routeAuth.js'



// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Synchroniser avec la base de données
database.sync();

// Création de l'application Express
const app = express();

// Utilisation des modules importés
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes pour les contrôleurs
app.use('/resultats',router1, resultRules);
app.use('/examens', router4, examRules);
app.use('/materiels',router3, materialRules);
app.use('/absences',router10, absenceRules);
app.use('/emplois-du-temps',router7, timetableRules);
app.use('/notes',router2, noteRules);
app.use('/etudiants',router5, studentRules);
app.use('/cours',router8, coursRules);
app.use('/classes',router9, classeRules);
app.use('/enseignants',router6, enseignantRules);
app.use('/login', routeAuth);

// Définition du port
const port = process.env.PORT || 5000;

// Lancement du serveur
app.listen(port, () => console.log(`Le serveur est lancé sur le port ${port}`));

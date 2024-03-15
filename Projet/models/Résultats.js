// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Résultats
const Resultat = database.define('resultat', {
    ID_resultat: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Resultat: DataTypes.FLOAT
}, { timestamps: false });

export default Resultat;

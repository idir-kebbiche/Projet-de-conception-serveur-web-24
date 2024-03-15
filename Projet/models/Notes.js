// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Notes
const Note = database.define('note', {
    ID_note: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Note: DataTypes.FLOAT
}, { timestamps: false });

export default Note;

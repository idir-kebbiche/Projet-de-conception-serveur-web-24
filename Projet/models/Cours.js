// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Cours
const Cours = database.define('cours', {
    ID_cours: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom_cours: { type: DataTypes.STRING, allowNull: false },
    Description: DataTypes.TEXT
}, { timestamps: false });

export default Cours;

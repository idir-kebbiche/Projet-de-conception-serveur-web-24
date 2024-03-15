// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Examens
const Examen = database.define('examen', {
    ID_examen: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Date_examen: DataTypes.DATEONLY,
    Description: DataTypes.TEXT,
}, { timestamps: false });

export default Examen;

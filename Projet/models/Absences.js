// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Absences
const Absence = database.define('absence', {
    ID_absence: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Date: DataTypes.DATEONLY,
    Justifiee: { type: DataTypes.BOOLEAN, allowNull: true } // Définir allowNull: true pour le rendre facultatif
}, { timestamps: false });

export default Absence;

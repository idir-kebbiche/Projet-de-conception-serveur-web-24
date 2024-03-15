// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Matériel
const Materiel = database.define('materiel', {
    ID_materiel: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom_materiel: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

export default Materiel;

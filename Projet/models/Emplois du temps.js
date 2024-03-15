// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Emplois du temps
const EmploiDuTemps = database.define('emploi_du_temps', {
    ID_EDT: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Jour: DataTypes.STRING,
    Heure_debut: DataTypes.TIME,
    Heure_fin: DataTypes.TIME,
}, { timestamps: false });

export default EmploiDuTemps;

// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Classes
const Classe = database.define('classe', {
    ID_classe: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom_classe: { type: DataTypes.STRING, allowNull: false },
    Niveau: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

export default Classe;

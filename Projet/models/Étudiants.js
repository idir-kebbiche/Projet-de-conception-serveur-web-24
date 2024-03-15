// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Étudiants
const Etudiant = database.define('etudiant', {
    ID_etudiant: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom: { type: DataTypes.STRING, allowNull: false },
    Prenom: { type: DataTypes.STRING, allowNull: false },
    Date_naissance: DataTypes.DATEONLY,
    Adresse: DataTypes.STRING,
    Numero_telephone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Mot_de_passe: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false });

export default Etudiant;

// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";

// Création du modèle pour la table Enseignants
const Enseignant = database.define('enseignant', {
    ID_enseignant: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nom: { type: DataTypes.STRING, allowNull: false },
    Prenom: { type: DataTypes.STRING, allowNull: false },
    Date_naissance: DataTypes.DATEONLY,
    Adresse: DataTypes.STRING,
    Numero_telephone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Mot_de_passe: { type: DataTypes.STRING, allowNull: false },
    Matiere_enseignee: DataTypes.STRING
}, { timestamps: false });

export default Enseignant;

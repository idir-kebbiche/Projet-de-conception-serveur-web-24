// Import de la connexion à la base de données
import database from "../config/connexion.js";
import { DataTypes } from "sequelize";
import Cours from "./Cours.js";
import Materiel from "./Materiel.js";

// Création du modèle pour la table de relation entre Cours et Matériel
const MaterielCours = database.define('materiel_cours', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, { timestamps: false });

// Définition des associations entre les modèles Cours et Matériel
Cours.belongsToMany(Materiel, { through: MaterielCours });
Materiel.belongsToMany(Cours, { through: MaterielCours });

export default MaterielCours;

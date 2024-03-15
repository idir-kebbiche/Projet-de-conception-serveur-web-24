import {Materiel} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister tout le matériel
export const listerMateriel = async (req, res) => {
    try {
        const materiel = await Materiel.findAll(); // Utilisation de la classe RelationsManager pour accéder à Materiel
        res.status(200).json({ data: materiel });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du matériel." });
    }
}

// Obtenir un équipement spécifique par son ID
export const obtenirMaterielParID = async (req, res) => {
    try {
        const equipement = await Materiel.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Materiel
        if (!equipement) {
            res.status(404).json({ message: "Équipement introuvable." });
        } else {
            res.status(200).json({ data: equipement });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'équipement." });
    }
}

// Créer un nouvel équipement
export const creerMateriel = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelEquipement = await Materiel.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Materiel
        res.status(201).json({ data: nouvelEquipement, message: "Équipement créé avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'équipement." });
    }
}

// Mettre à jour un équipement existant
export const mettreAJourMateriel = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const equipement = await Materiel.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Materiel
        if (!equipement) {
            res.status(404).json({ message: "Équipement introuvable." });
        } else {
            await equipement.update(req.body);
            res.status(200).json({ data: equipement, message: "Équipement mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'équipement." });
    }
}

// Supprimer un équipement existant
export const supprimerMateriel = async (req, res) => {
    try {
        const equipement = await Materiel.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Materiel
        if (!equipement) {
            res.status(404).json({ message: "Équipement introuvable." });
        } else {
            await equipement.destroy();
            res.status(200).json({ message: "Équipement supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'équipement." });
    }
}

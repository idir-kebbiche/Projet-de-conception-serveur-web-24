import {EmploiDuTemps} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister tous les emplois du temps
export const listerEmploisDuTemps = async (req, res) => {
    try {
        const emploisDuTemps = await EmploiDuTemps.findAll(); // Utilisation de la classe RelationsManager pour accéder à EmploiDuTemps
        res.status(200).json({ data: emploisDuTemps });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des emplois du temps." });
    }
}

// Obtenir un emploi du temps spécifique par son ID
export const obtenirEmploiDuTempsParID = async (req, res) => {
    try {
        const emploiDuTemps = await EmploiDuTemps.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à EmploiDuTemps
        if (!emploiDuTemps) {
            res.status(404).json({ message: "Emploi du temps introuvable." });
        } else {
            res.status(200).json({ data: emploiDuTemps });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'emploi du temps." });
    }
}

// Créer un nouvel emploi du temps
export const creerEmploiDuTemps = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauEmploiDuTemps = await EmploiDuTemps.create(req.body); // Utilisation de la classe RelationsManager pour accéder à EmploiDuTemps
        res.status(201).json({ data: nouveauEmploiDuTemps, message: "Emploi du temps créé avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'emploi du temps." });
    }
}

// Mettre à jour un emploi du temps existant
export const mettreAJourEmploiDuTemps = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const emploiDuTemps = await EmploiDuTemps.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à EmploiDuTemps
        if (!emploiDuTemps) {
            res.status(404).json({ message: "Emploi du temps introuvable." });
        } else {
            await emploiDuTemps.update(req.body);
            res.status(200).json({ data: emploiDuTemps, message: "Emploi du temps mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'emploi du temps." });
    }
}

// Supprimer un emploi du temps existant
export const supprimerEmploiDuTemps = async (req, res) => {
    try {
        const emploiDuTemps = await EmploiDuTemps.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à EmploiDuTemps
        if (!emploiDuTemps) {
            res.status(404).json({ message: "Emploi du temps introuvable." });
        } else {
            await emploiDuTemps.destroy();
            res.status(200).json({ message: "Emploi du temps supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'emploi du temps." });
    }
}

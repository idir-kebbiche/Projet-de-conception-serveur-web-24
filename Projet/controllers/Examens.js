import {Examen} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister tous les examens
export const listerExamens = async (req, res) => {
    try {
        const examens = await Examen.findAll(); // Utilisation de la classe RelationsManager pour accéder à Examen
        res.status(200).json({ data: examens });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des examens." });
    }
}

// Obtenir un examen spécifique par son ID
export const obtenirExamenParID = async (req, res) => {
    try {
        const examen = await Examen.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Examen
        if (!examen) {
            res.status(404).json({ message: "Examen introuvable." });
        } else {
            res.status(200).json({ data: examen });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'examen." });
    }
}

// Créer un nouvel examen
export const creerExamen = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelExamen = await Examen.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Examen
        res.status(201).json({ data: nouvelExamen, message: "Examen créé avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'examen." });
    }
}

// Mettre à jour un examen existant
export const mettreAJourExamen = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const examen = await Examen.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Examen
        if (!examen) {
            res.status(404).json({ message: "Examen introuvable." });
        } else {
            await examen.update(req.body);
            res.status(200).json({ data: examen, message: "Examen mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'examen." });
    }
}

// Supprimer un examen existant
export const supprimerExamen = async (req, res) => {
    try {
        const examen = await Examen.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Examen
        if (!examen) {
            res.status(404).json({ message: "Examen introuvable." });
        } else {
            await examen.destroy();
            res.status(200).json({ message: "Examen supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'examen." });
    }
}

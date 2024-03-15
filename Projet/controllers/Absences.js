import { Absence } from "../models/relations.js"; // Import du modèle Absence depuis relations.js
import { validationResult } from "express-validator";

// Lister toutes les absences
export const listerAbsences = async (req, res) => {
    try {
        const absences = await Absence.findAll(); // Utilisation du modèle Absence pour accéder aux absences
        console.log("Liste des absences récupérée avec succès :", absences);
        res.status(200).json({ data: absences });
    } catch (error) {
        console.error("Erreur lors de la récupération des absences :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des absences." });
    }
}

// Obtenir une absence spécifique par son ID
export const obtenirAbsenceParID = async (req, res) => {
    try {
        const absence = await Absence.findByPk(req.params.id); // Utilisation du modèle Absence pour accéder à une absence par son ID
        if (!absence) {
            console.log("Absence introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Absence introuvable." });
        } else {
            console.log("Absence récupérée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: absence });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'absence pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'absence." });
    }
}

// Créer une nouvelle absence
export const creerAbsence = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'une absence :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleAbsence = await Absence.create(req.body); // Utilisation du modèle Absence pour créer une nouvelle absence
        console.log("Absence créée avec succès :", nouvelleAbsence);
        res.status(201).json({ data: nouvelleAbsence, message: "Absence créée avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de l'absence :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'absence." });
    }
}

// Mettre à jour une absence existante
export const mettreAJourAbsence = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'une absence :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const absence = await Absence.findByPk(req.params.id); // Utilisation du modèle Absence pour accéder à une absence par son ID
        if (!absence) {
            console.log("Absence introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Absence introuvable." });
        } else {
            await absence.update(req.body);
            console.log("Absence mise à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: absence, message: "Absence mise à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'absence pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'absence." });
    }
}

// Supprimer une absence existante
export const supprimerAbsence = async (req, res) => {
    try {
        const absence = await Absence.findByPk(req.params.id); // Utilisation du modèle Absence pour accéder à une absence par son ID
        if (!absence) {
            console.log("Absence introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Absence introuvable." });
        } else {
            await absence.destroy();
            console.log("Absence supprimée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Absence supprimée avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'absence pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'absence." });
    }
}

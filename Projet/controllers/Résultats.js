import {Resultat} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister tous les résultats
export const listerResultats = async (req, res) => {
    try {
        const resultats = await Resultat.findAll(); // Utilisation de la classe RelationsManager pour accéder à Resultat
        res.status(200).json({ data: resultats });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des résultats." });
    }
}

// Obtenir un résultat spécifique par son ID
export const obtenirResultatParID = async (req, res) => {
    try {
        const resultat = await Resultat.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Resultat
        if (!resultat) {
            res.status(404).json({ message: "Résultat introuvable." });
        } else {
            res.status(200).json({ data: resultat });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du résultat." });
    }
}

// Créer un nouveau résultat
export const nouveauResultat = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauResultat = await Resultat.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Resultat
        res.status(201).json({ data: nouveauResultat, message: "Résultat créé avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du résultat." });
    }
}

// Mettre à jour un résultat existant
export const mettreAJourResultat = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const resultat = await Resultat.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Resultat
        if (!resultat) {
            res.status(404).json({ message: "Résultat introuvable." });
        } else {
            await resultat.update(req.body);
            res.status(200).json({ data: resultat, message: "Résultat mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du résultat." });
    }
}

// Supprimer un résultat existant
export const supprimerResultat = async (req, res) => {
    try {
        const resultat = await Resultat.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Resultat
        if (!resultat) {
            res.status(404).json({ message: "Résultat introuvable." });
        } else {
            await resultat.destroy();
            res.status(200).json({ message: "Résultat supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du résultat." });
    }
}

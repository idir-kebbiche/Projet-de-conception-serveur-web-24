import {Enseignant} from "../models/relations.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs'; // Importez le module de hachage


// Lister tous les enseignants
export const listerEnseignants = async (req, res) => {
    try {
        const enseignants = await Enseignant.findAll(); // Utilisation de la classe RelationsManager pour accéder à Enseignant
        res.status(200).json({ data: enseignants });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des enseignants." });
    }
}

// Obtenir un enseignant spécifique par son ID
export const obtenirEnseignantParID = async (req, res) => {
    try {
        const enseignant = await Enseignant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Enseignant
        if (!enseignant) {
            res.status(404).json({ message: "Enseignant introuvable." });
        } else {
            res.status(200).json({ data: enseignant });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'enseignant." });
    }
}

// Créer un nouvel enseignant
export const creerEnseignant = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    // Hachage du mot de passe
    const Mot_de_passe = req.body.Mot_de_passe;
    const Mot_de_passe_hache = bcrypt.hashSync(req.body.Mot_de_passe, 10);

    try {
        // Remplacez le mot de passe brut par le mot de passe haché dans les données de la requête
        req.body.Mot_de_passe = Mot_de_passe_hache;

        // Création de l'enseignant avec le mot de passe haché
        const nouvelEnseignant = await Enseignant.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Enseignant

        res.status(201).json({ data: nouvelEnseignant, message: "Enseignant créé avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'enseignant." });
    }
}

// Mettre à jour un enseignant existant
export const mettreAJourEnseignant = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const enseignant = await Enseignant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Enseignant
        if (!enseignant) {
            res.status(404).json({ message: "Enseignant introuvable." });
        } else {
            await enseignant.update(req.body);
            res.status(200).json({ data: enseignant, message: "Enseignant mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'enseignant." });
    }
}

// Supprimer un enseignant existant
export const supprimerEnseignant = async (req, res) => {
    try {
        const enseignant = await Enseignant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Enseignant
        if (!enseignant) {
            res.status(404).json({ message: "Enseignant introuvable." });
        } else {
            await enseignant.destroy();
            res.status(200).json({ message: "Enseignant supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'enseignant." });
    }
}

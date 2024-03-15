import {Etudiant} from "../models/relations.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs'; // Importez le module de hachage

// Lister tous les étudiants
export const listerEtudiants = async (req, res) => {
    try {
        const etudiants = await Etudiant.findAll(); // Utilisation de la classe RelationsManager pour accéder à Etudiant
        res.status(200).json({ data: etudiants });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des étudiants." });
    }
}

// Obtenir un étudiant spécifique par son ID
export const obtenirEtudiantParID = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Etudiant
        if (!etudiant) {
            res.status(404).json({ message: "Étudiant introuvable." });
        } else {
            res.status(200).json({ data: etudiant });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'étudiant." });
    }
}

// Créer un nouvel étudiant
export const nouvelEtudiant = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    // Hachage du mot de passe
    const Mot_de_passe = req.body.Mot_de_passe;
    const Mot_de_passe_hache = bcrypt.hashSync(Mot_de_passe, 10);

    try {
        // Remplacez le mot de passe brut par le mot de passe haché dans les données de la requête
        req.body.Mot_de_passe = Mot_de_passe_hache;
        
        // Création de l'étudiant avec le mot de passe haché
        console.log("Données de la requête pour la création de l'étudiant :", req.body); // Log des données de la requête
        const nouvelEtudiant = await Etudiant.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Etudiant
        console.log("Nouvel étudiant créé avec succès :", nouvelEtudiant); // Log de l'étudiant créé avec succès
        
        res.status(201).json({ data: nouvelEtudiant, message: "Étudiant créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de l'étudiant :", error); // Log de l'erreur
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'étudiant." });
    }
}
// Mettre à jour un étudiant existant
export const mettreAJourEtudiant = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const etudiant = await Etudiant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Etudiant
        if (!etudiant) {
            res.status(404).json({ message: "Étudiant introuvable." });
        } else {
            await etudiant.update(req.body);
            res.status(200).json({ data: etudiant, message: "Étudiant mis à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'étudiant." });
    }
}

// Supprimer un étudiant existant
export const supprimerEtudiant = async (req, res) => {
    try {
        const etudiant = await Etudiant.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Etudiant
        if (!etudiant) {
            res.status(404).json({ message: "Étudiant introuvable." });
        } else {
            await etudiant.destroy();
            res.status(200).json({ message: "Étudiant supprimé avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'étudiant." });
    }
}

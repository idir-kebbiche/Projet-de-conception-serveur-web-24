import {Classe} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister toutes les classes
export const listerClasses = async (req, res) => {
    try {
        const classes = await Classe.findAll(); // Utilisation de la classe RelationsManager pour accéder à Classe
        res.status(200).json({ data: classes });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des classes." });
    }
}

// Obtenir une classe spécifique par son ID
export const obtenirClasseParID = async (req, res) => {
    try {
        const classe = await Classe.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Classe
        if (!classe) {
            res.status(404).json({ message: "Classe introuvable." });
        } else {
            res.status(200).json({ data: classe });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la classe." });
    }
}

// Créer une nouvelle classe
export const creerClasse = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleClasse = await Classe.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Classe
        res.status(201).json({ data: nouvelleClasse, message: "Classe créée avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la classe." });
    }
}

// Mettre à jour une classe existante
export const mettreAJourClasse = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const classe = await Classe.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Classe
        if (!classe) {
            res.status(404).json({ message: "Classe introuvable." });
        } else {
            await classe.update(req.body);
            res.status(200).json({ data: classe, message: "Classe mise à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la classe." });
    }
}

// Supprimer une classe existante
export const supprimerClasse = async (req, res) => {
    try {
        const classe = await Classe.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Classe
        if (!classe) {
            res.status(404).json({ message: "Classe introuvable." });
        } else {
            await classe.destroy();
            res.status(200).json({ message: "Classe supprimée avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la classe." });
    }
}

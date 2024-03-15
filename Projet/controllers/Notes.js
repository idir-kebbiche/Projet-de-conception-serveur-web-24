import {Note} from "../models/relations.js";
import { validationResult } from "express-validator";

// Lister toutes les notes
export const listerNotes = async (req, res) => {
    try {
        const notes = await Note.findAll(); // Utilisation de la classe RelationsManager pour accéder à Note
        res.status(200).json({ data: notes });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des notes." });
    }
}

// Obtenir une note spécifique par son ID
export const obtenirNoteParID = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Note
        if (!note) {
            res.status(404).json({ message: "Note introuvable." });
        } else {
            res.status(200).json({ data: note });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la note." });
    }
}

// Créer une nouvelle note
export const creerNote = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleNote = await Note.create(req.body); // Utilisation de la classe RelationsManager pour accéder à Note
        res.status(201).json({ data: nouvelleNote, message: "Note créée avec succès." });
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la note." });
    }
}

// Mettre à jour une note existante
export const mettreAJourNote = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const note = await Note.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Note
        if (!note) {
            res.status(404).json({ message: "Note introuvable." });
        } else {
            await note.update(req.body);
            res.status(200).json({ data: note, message: "Note mise à jour avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la note." });
    }
}

// Supprimer une note existante
export const supprimerNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id); // Utilisation de la classe RelationsManager pour accéder à Note
        if (!note) {
            res.status(404).json({ message: "Note introuvable." });
        } else {
            await note.destroy();
            res.status(200).json({ message: "Note supprimée avec succès." });
        }
    } catch (error) {
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la note." });
    }
}

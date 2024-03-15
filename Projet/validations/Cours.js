import { body, param } from "express-validator";

const coursRules = [
    body('enseignantIDEnseignant').optional().isInt({ min: 1 }).withMessage('ID de Enseignant invalide'),
    body('Nom_cours').isString().withMessage("Le nom du cours doit être une chaîne de caractères"),
    body('Description').isString().withMessage("La description du cours doit être une chaîne de caractères"),
    param('ID_cours').optional().isInt({ min: 1 }).withMessage("L'ID doit être un entier positif")
];

export default coursRules;

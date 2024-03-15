import { body, param } from "express-validator";

const timetableRules = [
    body('Jour').isString().withMessage('Jour invalide'),
    body('Heure_debut').isString().withMessage('Heure de début invalide'),
    body('Heure_fin').isString().withMessage('Heure de fin invalide'),
    body('courIDCours').optional().isInt({ min: 1 }).withMessage('ID de Cours invalide'),
    body('classeIDClasse').optional().isInt({ min: 1 }).withMessage('ID de la classe invalide'),
    body('enseignantIDEnseignant').optional().isInt({ min: 1 }).withMessage('ID de Enseignant invalide'),
    param('ID_EDT').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default timetableRules;

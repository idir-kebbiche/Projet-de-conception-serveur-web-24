import { body, param } from "express-validator";

const resultRules = [
    body('Resultat').isNumeric().withMessage('La note doit être un nombre'),
    body('etudiantIDEtudiant').optional().isInt({ min: 1 }).withMessage('ID de Etudiant invalide'),
    body('examenIDExamen').optional().isInt({ min: 1 }).withMessage('ID de Examen invalide'),
    param('ID_resultat').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default resultRules;

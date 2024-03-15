import { body, param } from "express-validator";

const absenceRules = [
    body('etudiantIDEtudiant').optional().isInt({ min: 1 }).withMessage('ID de Etudiant invalide'),
    body('ID_etudiant').isInt({ min: 1 }).withMessage('ID de l\'étudiant invalide'),
    body('Date').isISO8601().withMessage('Format de date invalide'),
    body('Justifiee').optional().isBoolean().withMessage('Justification invalide'),
    param('ID_absence').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default absenceRules;

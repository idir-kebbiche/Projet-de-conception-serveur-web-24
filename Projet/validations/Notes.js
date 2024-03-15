import { body, param } from "express-validator";

const noteRules = [
    body('Note').isNumeric().withMessage('Note invalide'),
    body('etudiantIDEtudiant').optional().isInt({ min: 1 }).withMessage('ID de Etudiant invalide'),
    body('courIDCours').optional().isInt({ min: 1 }).withMessage('ID de Cours invalide'),
    param('ID_note').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default noteRules;

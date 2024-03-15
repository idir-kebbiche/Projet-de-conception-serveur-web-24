import { body, param } from "express-validator";

const examRules = [
    body('Date_examen').isISO8601().withMessage('Format de date invalide'),
    body('Description').optional().isString().withMessage('Description invalide'),
    body('ID_cours').isInt({ min: 1 }).withMessage('ID du cours invalide'),
    param('ID_examen').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default examRules;

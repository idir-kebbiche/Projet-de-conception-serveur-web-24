import { body, param } from "express-validator";

const materialRules = [
    body('Nom_materiel').isString().withMessage('Nom du matériel invalide'),
    param('ID_materiel').optional().isInt({ min: 1 }).withMessage('ID invalide')
];

export default materialRules;

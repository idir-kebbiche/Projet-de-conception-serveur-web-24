import { body, param } from "express-validator";

const classeRules = [
    body('Nom_classe').isString().withMessage("Le nom de la classe doit être une chaîne de caractères"),
    body('Niveau').isString().withMessage("Le niveau de la classe doit être une chaîne de caractères"),
    param('ID_classe').optional().isInt({ min: 1 }).withMessage("L'ID doit être un entier positif")
];

export default classeRules;

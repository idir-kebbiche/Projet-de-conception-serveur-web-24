import { body, param } from "express-validator";

// Définir la regex pour les noms et prénoms
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-'\s]+$/;

const enseignantRules = [
    body('Nom').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('Prenom').matches(nameRegex).withMessage("le prénom n'est pas conforme"),
    body('Email').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('Mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caractères')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractère spécial'),
        body('Date_naissance').isISO8601().withMessage('Format de date de naissance incorrect'),
    param('ID_enseignant').optional().isInt({ min: 1 }).withMessage("l'id doit être un entier positif")
];

export default enseignantRules;

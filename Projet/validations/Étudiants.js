import { body, param } from "express-validator";

// Définir la regex pour les noms et prénoms
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-'\s]+$/;

const studentRules = [
    body('classeIDClasse').optional().isInt({ min: 1 }).withMessage('ID de la classe invalide'),
    body('Nom').matches(nameRegex).withMessage("Le nom n'est pas conforme"),
    body('Prenom').matches(nameRegex).withMessage("Le prénom n'est pas conforme"),
    body('Email').exists().withMessage('Email obligatoire').isEmail().withMessage("Ceci n'est pas un email valide"),
    body('Mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('Au moins 8 caractères')
        .matches(/\d/).withMessage('Au moins un chiffre')
        .matches(/[a-z]/).withMessage('Au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('Au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Au moins un caractère spécial'),
        body('Date_naissance').isISO8601().withMessage('Format de date de naissance incorrect'),
    param('ID_etudiant').optional().isInt({ min: 1 }).withMessage("ID invalide")
];

export default studentRules;

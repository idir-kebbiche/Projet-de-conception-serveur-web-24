import { Etudiant, Enseignant } from "../models/relations.js";

// Importer le module de hachage
import bcrypt from 'bcryptjs'

// Importer le module qui génère la clé
import jwt from 'jsonwebtoken'

// Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    
    // Récupération des résultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Les informations de connexion
    const { Email, Mot_de_passe } = req.body

    // Vérification de l'Email
    if (!Email) return res.status(404).json({ message: "L'Email est incorrect" })

    // Chercher la personne dans la base de données
    try {
        // Recherche dans la table Etudiant
        let user = await Etudiant.findOne({ where: { Email } })

        // Si l'utilisateur n'est pas trouvé dans la table Etudiant, chercher dans la table Enseignant
        if (!user) {
            user = await Enseignant.findOne({ where: { Email } })

            // Si l'utilisateur n'est pas trouvé dans la table Enseignant non plus, renvoyer un message d'erreur
            if (!user) return res.status(404).json({ message: "La personne n'existe pas!" })
        }

        // Vérification du mot de passe
        const mdpJuste = bcrypt.compareSync(Mot_de_passe, user.Mot_de_passe)

        if (!mdpJuste) return res.status(401).json({ message: "Mot de passe incorrect" })

        // Création de la clé d'accès
        const payload = { id: user.id }
        const token = jwt.sign(payload, process.env.CODE_SECRET)

        res.status(200).json({ data: user, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

import { Router } from "express";
import { listerEnseignants, creerEnseignant, mettreAJourEnseignant, supprimerEnseignant } from "../controllers/Enseignants.js";
import enseignantRules from "../validations/Enseignants.js";
const router6 = Router();

router6
    .get("/", listerEnseignants)
    .post("/",enseignantRules, creerEnseignant)
    .put("/:id",enseignantRules, mettreAJourEnseignant)
    .delete("/:id", supprimerEnseignant);

export default router6;

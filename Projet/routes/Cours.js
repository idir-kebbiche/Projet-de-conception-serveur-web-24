import { Router } from "express";
import { listerCours, creerCours, mettreAJourCours, supprimerCours } from "../controllers/Cours.js";
import coursRules from "../validations/Cours.js";
const router8 = Router();

router8
    .get("/", listerCours)
    .post("/",coursRules, creerCours)
    .put("/:id",coursRules, mettreAJourCours)
    .delete("/:id", supprimerCours);

export default router8;

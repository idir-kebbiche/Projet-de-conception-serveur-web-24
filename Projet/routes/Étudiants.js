import { Router } from "express";
import { listerEtudiants, nouvelEtudiant, mettreAJourEtudiant, supprimerEtudiant } from "../controllers/Étudiants.js";
import  studentRules  from "../validations/Étudiants.js";

const router5 = Router();

router5
    .get("/", listerEtudiants)
    .post("/",studentRules, nouvelEtudiant)
    .put("/:id",studentRules, mettreAJourEtudiant)
    .delete("/:id", supprimerEtudiant);

export default router5;

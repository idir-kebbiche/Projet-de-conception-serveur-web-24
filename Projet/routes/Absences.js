import { Router } from "express";
import { listerAbsences, creerAbsence, mettreAJourAbsence, supprimerAbsence } from "../controllers/Absences.js";
import absenceRules from "../validations/Absences.js";
const router10 = Router();

router10
    .get("/", listerAbsences)
    .post("/",absenceRules, creerAbsence)
    .put("/:id",absenceRules, mettreAJourAbsence)
    .delete("/:id", supprimerAbsence);

export default router10;

import { Router } from "express";
import { listerEmploisDuTemps, creerEmploiDuTemps, mettreAJourEmploiDuTemps, supprimerEmploiDuTemps } from "../controllers/Emplois du temps.js";
import timetableRules from "../validations/Emplois du temps.js";
const router7 = Router();

router7
    .get("/", listerEmploisDuTemps)
    .post("/",timetableRules, creerEmploiDuTemps)
    .put("/:id",timetableRules, mettreAJourEmploiDuTemps)
    .delete("/:id", supprimerEmploiDuTemps);

export default router7;

import { Router } from "express";
import { listerExamens, creerExamen, mettreAJourExamen, supprimerExamen } from "../controllers/Examens.js";
import examRules from "../validations/Examens.js";
const router4 = Router();

router4
    .get("/", listerExamens)
    .post("/",examRules, creerExamen)
    .put("/:id",examRules, mettreAJourExamen)
    .delete("/:id", supprimerExamen);

export default router4;

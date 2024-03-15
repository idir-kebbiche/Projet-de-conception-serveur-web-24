import { Router } from "express";
import { listerResultats, nouveauResultat, mettreAJourResultat, supprimerResultat } from "../controllers/Résultats.js";
import resultRules from "../validations/Résultats.js";
const router1 = Router();

router1
    .get("/", listerResultats)
    .post("/",resultRules, nouveauResultat)
    .put("/:id",resultRules, mettreAJourResultat)
    .delete("/:id", supprimerResultat);

export default router1;

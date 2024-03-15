import { Router } from "express";
import { listerMateriel, creerMateriel, mettreAJourMateriel, supprimerMateriel } from "../controllers/Matériel.js";
import materialRules from "../validations/Matériel.js";
const router3 = Router();

router3
    .get("/", listerMateriel)
    .post("/",materialRules, creerMateriel)
    .put("/:id",materialRules, mettreAJourMateriel)
    .delete("/:id", supprimerMateriel);

export default router3;

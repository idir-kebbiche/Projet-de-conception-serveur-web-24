import { Router } from "express";
import { listerClasses, creerClasse, mettreAJourClasse, supprimerClasse } from "../controllers/Classes.js";
import classeRules from "../validations/Classes.js";
const router9 = Router();

router9
    .get("/", listerClasses)
    .post("/",classeRules, creerClasse)
    .put("/:id",classeRules, mettreAJourClasse)
    .delete("/:id", supprimerClasse);

export default router9;

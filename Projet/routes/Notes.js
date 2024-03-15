import { Router } from "express";
import { listerNotes, creerNote, mettreAJourNote, supprimerNote } from "../controllers/Notes.js";
import noteRules from "../validations/Notes.js";
const router2 = Router();

router2
    .get("/", listerNotes)
    .post("/",noteRules, creerNote)
    .put("/:id",noteRules, mettreAJourNote)
    .delete("/:id", supprimerNote);

export default router2;

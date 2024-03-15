// Import de la connexion à la base de données
import Etudiant from "./Étudiants.js";
import Resultat from "./Résultats.js";
import Examen from "./Examens.js";
import Materiel from "./Matériel.js";
import Cours from "./Cours.js";
import Classe from "./Classes.js";
import Enseignant from "./Enseignants.js";
import Absence from "./Absences.js";
import EmploiDuTemps from "./Emplois du temps.js";
import Note from "./Notes.js";

// Log pour vérifier si l'importation du modèle Etudiant est correcte
console.log("Modèle Etudiant importé :", Etudiant);

// Définition des relations entre les tables
const defineRelations = () => {
    // Relation entre Résultats et Étudiants
    Resultat.belongsTo(Etudiant);
    Etudiant.hasMany(Resultat);

    // Relation entre Résultats et Examens
    Resultat.belongsTo(Examen);
    Examen.hasMany(Resultat);

    // Relation entre Matériel et Cours
    Materiel.belongsToMany(Cours, { through: "MaterielCours" });
    Cours.belongsToMany(Materiel, { through: "MaterielCours" });

    // Relation entre Étudiants et Classes
    Etudiant.belongsTo(Classe);
    Classe.hasMany(Etudiant);

    // Relation entre Cours et Enseignants
    Cours.belongsTo(Enseignant);
    Enseignant.hasMany(Cours);

    // Relation entre Absences et Étudiants
    Absence.belongsTo(Etudiant);
    Etudiant.hasMany(Absence);

    // Relation entre Emplois du temps et Cours
    EmploiDuTemps.belongsTo(Cours);
    Cours.hasMany(EmploiDuTemps);

    // Relation entre Emplois du temps et Classes
    EmploiDuTemps.belongsTo(Classe);
    Classe.hasMany(EmploiDuTemps);

    // Relation entre Emplois du temps et Enseignants
    EmploiDuTemps.belongsTo(Enseignant);
    Enseignant.hasMany(EmploiDuTemps);

    // Relation entre Notes et Étudiants
    Note.belongsTo(Etudiant);
    Etudiant.hasMany(Note);

    // Relation entre Notes et Cours
    Note.belongsTo(Cours);
    Cours.hasMany(Note);
    
};

// Appel de la fonction pour définir les relations lors de l'initialisation
defineRelations();

// Export de chaque modèle individuellement
export { Etudiant, Resultat, Examen, Materiel, Cours, Classe, Enseignant, Absence, EmploiDuTemps, Note };

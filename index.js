class Etudiant{
    constructor(nom, prenom, filiere){
        this.nom = nom;
        this.prenom = prenom;
        this.filiere = filiere;
    }

    lesNotes = [];

    calculMoyenne(){
        
        if(this.lesNotes.length<1){
            console.log("Vous n'avez aucune note. votre moyenne ne peut pas etre calculer");
        }else{
            let moyenne=0;

            for(let element of this.lesNotes){
               moyenne = (moyenne + element.note*element.coefficient)/this.lesNotes.length;
            } 
            
            console.log(`votre moyenne est de ${moyenne}`);
        }
    }
    ajouteNote(){
        for(let i=0; i<3; i++){
            let matiere = prompt("quel est le nom de la matiere?");
            let note = Number(prompt("entrer sa note"));
            let coefficient = Number(prompt("quel est son coefficient"));
    
            this.lesNotes.push( // envoie tout ca dans le tableau
                {
                    matiere,
                    note,
                    coefficient
                }
            );
        }
    }
}

let jean = new Etudiant("SESOU", "jean de dieu", "GM");

jean.ajouteNote();

console.log(jean);

jean.calculMoyenne();
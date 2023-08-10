"use strict";
/* function askYourName(){

let name = prompt("Quel est ton nom?") ;
let prenom = prompt("Et ton prenom?");
let age = Number(prompt("votre age ?"));

console.log(`Vous vous appelez ${name} ${prenom}. vous avez ${age}`);

}

askYourName(); */

/* function askYourName(nom, prenom, age){
    console.log(`Vous vous appelez ${nom} ${prenom}. vous avez ${age}`);
}

let nom = prompt("Quel est ton nom?") ;
let prenom = prompt("Et ton prenom?");
let age = Number(prompt("votre age ?"));

askYourName(nom, prenom, age); */

//les fonction fleché 

/* let presentation = () => {
    
} */

/* let afficheList = (monTableau) => {
    
    console.log(`voici la liste de vos films :`);
    
    for(let element of mesFilms){
        console.log(element);
    }

}

let mesFilms = [];

afficheList(mesFilms);

let ask = prompt("Voulez vous entrez un nouveau films ? taper o pour oui, n pour non");

while(ask!="n"){
    mesFilms.push(prompt("Entrer le nouveau films"));
    ask = prompt("Voulez vous entrez un nouveau film ? taper o pour oui, n pour non");
}

afficheList(mesFilms);
 */


/* let brook = 
{nom: "brook", 
age: 100, 
ilEstCool: true, 
instrument: ["violon", "piano"],

presentation() {
  console.log(`je m'appelle ${this.nom} j'ai ${this.age}et je joue du ${this.instrument[0]} `);
}
 
};
brook.presentation();
 */

//une fonction qui additionne deux nombre

/* let parite = (nombre) => {

    console.log(nombre%2);

    let reste = nombre%2 ;

    if(reste==0){
        console.log("le nombre est pair");
    }else{
        console.log("le nombre est impair");
    }

}

let addition = (nombre1, nombre2) =>
{
    let nombre =  nombre1 + nombre2;

    console.log(`${nombre1} + ${nombre2} = ${nombre}`);

    parite(nombre);
};

addition(2, 3); */

/* let parite = (nombre) => {

    if(nombre%2!=0){
        console.log(nombre);
    }
}

let showTab = (monTab) => {

    console.log("Voici les chiffres impair du tableau :");

    for(let element of monTab){
        parite(element);
    }
}

let chiffre = [10, 18, 13, 11, 7, 5, 3] ;

showTab(chiffre);
 */

/* let tableauFilms = [
    {
        Titre : "avatar",
        annee : 1990
    },

    {
        Titre : "avenger",
        annee : 1980
    },

    {
        Titre : "wakanda",
        annee : 1960
    },

    {
        Titre : "spiderman",
        annee : 2020
    }

];

let showTab = (monTab) => {
    for(let element of monTab){
        console.log(element.Titre);
    }
}

showTab(tableauFilms); */

/* let comparaison = (monTab) => {
    for(let element of monTab){
        let nombre = 0 ;
        for (let element2 of monTab) {

            if(element.annee<element2.annee){
                nombre = nombre + 1 ;
            } 
        }
        if(nombre==3){
            console.log(`le film le plus ancien est celui de ${element.Titre} sorti en ${element.annee}`);
        }
    }
}

comparaison(tableauFilms); */

/* let nombre = tableauFilms[0].annee;

let comparaison = (monTab) => {
    for(let element of monTab){
        if (element.annee<nombre){
            nombre = element.annee;
        }
    }
    console.log(`la plus vielle annee est ${nombre}`);
}

comparaison(tableauFilms); */

/* class Personne{  // cree une class avec le mot clé class

    nom = "Saint";
    prenom = "franklin";

    presentation(){
        console.log(`je m'appelle ${this.prenom} ${this.nom}`);
    }

};

let koffi = new Personne();

console.log(koffi); */

/* class Personne{
    constructor(nom, prenom){ //on utilise le contrustor pour customise les personnes
        this.nom = nom ;
        this.prenom = prenom;
    }

    presentation(){
        console.log(`je m'appelle ${this.prenom} ${this.nom}`);
    }
}

let franklin = new Personne("Saint", "franklin");

franklin.presentation(); */

/* class Animals{
    constructor(nom){
        this.nom = nom ;
    }
}

let chien = new Animals("tyson");

let chat = new Animals("sunshine");

console.log(chien);

console.log(chat); */

class Personne{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
    
    isliving = true ;
};

class Etudiant extends Personne{
    constructor(nom, prenom, filiere){
        super(nom, prenom);
        this.filiere = filiere;
    }

    presentation(){
        console.log(`je m'appelle ${this.nom} ${this.prenom}.je suis en ${this.filiere}`);
    }
}

let jean = new Etudiant("SESSOU", "jean de dieu", "GM");

console.log(jean);

jean.presentation();
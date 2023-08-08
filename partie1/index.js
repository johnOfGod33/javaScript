// let nom declaration de variable avec let
// const pour declarer le constante 
// prompt pour demandé a l'utilisateur une saisie (il recoit que des chaines de caractere car java est faiblement typé)

/*  let nom = prompt("quel est votre nom") ;
 let prenom = prompt("quel est votre prenom");

 console.log(nom, prenom) ; */


/*  let specialite = prompt("quelle specialité faite vous ?")

 while(specialite != "IT"){
    console.log("tu n'as pas ta place ici");
    specialite = prompt("quelle specialité faite vous ?")
 }

 console.log("Bienvenue chez nous"); */

let heure = Number(prompt("il est quel heure ?"));

let minute = Number(prompt("Combien de minutes"));

let seconde = Number(prompt("Combien de secondes"));

if(seconde>=0 && seconde< 59){

    seconde = seconde + 1;
    console.log(`il est ${heure}h ${minute}min ${seconde}s`);
   
}else if(seconde==59){

    if(minute>=0 && minute<59){
        seconde = 0 ;
        minute = minute + 1 ;
        console.log(`il est ${heure}h ${minute}min ${seconde}s`);

    }else if(minute==59){
        
        if(heure>=0 && heure<23){

            seconde = 0 ;
            minute = 0;
            heure = heure + 1 ;
            console.log(`il est ${heure}h ${minute}min ${seconde}s`);
        }
        else if(heure==23){
            seconde = 0;
            minute = 0 ;
            heure = 0 ;
            console.log(`il est ${heure}h ${minute}min ${seconde}s`);
        }
    }
}



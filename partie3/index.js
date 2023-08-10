class Personnage{
    constructor(nom){
        this.nom = nom;
    }

    nbreVie = 100 ;
    exp = 0 ;

    arme = [{arme: "epee", degat: 20}, {arme: "marteau", degat:10}, {arme: "fusil", degat: 35}];

    presentation(){
        console.log(`je m'appelle ${this.nom}`);
    }

    
    attaque(Personnage, arme){
        for(let element of this.arme){
            if(arme==element.arme){
                Personnage.nbreVie = Personnage.nbreVie - element.degat ;
                console.log(`${this.nom} a attaque ${Personnage.nom} avec ${arme}. il lui reste ${Personnage.nbreVie} point de vie`);

                while(Personnage.nbreVie!=0 && Personnage.nbreVie >0){
                    Personnage.nbreVie = Personnage.nbreVie - element.degat;

                    console.log(`${this.nom} a attaque ${Personnage.nom} avec ${arme}. il lui reste ${Personnage.nbreVie} point de vie`);

                    if(Personnage.nbreVie<=0){
                        this.exp = this.exp + 10 ;
                        console.log(`${this.nom} a vaincu ${Personnage.nom} il a maintenant ${this.exp} exp`);
                    }
                }
            }
        }
    }
};

let luffy = new Personnage("luffy");

let zoro = new Personnage("zoro");

zoro.attaque(luffy, "marteau");


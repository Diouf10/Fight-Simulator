
/**
 * Personnage
 */
class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    get informations() { 
        return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }

    evoluer() {
        this.niveau++;

        console.log(this.pseudo + " est passé au niveau " + this.niveau + " !");
    }

    verifierSante() {
        if(this.sante <= 0) {
            this.sante = 0;
            console.log(this.pseudo + " a perdu !");
        }
        else {
            console.log(this.pseudo + " a encore " + this.sante + " points de vie.");
        }
    }
}



/**
 * Magicien hérite de Personnage
 */
class Magicien extends Personnage {
    constructor(pseudo) { 
        super(pseudo, "magicien", 170, 90);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;

        console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant un sort (" + this.attaque + " dégâts).");

        this.evoluer();
        personnage.verifierSante();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;

        console.log(this.pseudo + " attaque avec son coups spécial des arcanes " + personnage.pseudo + " (" + this.attaque * 5 + " dégâts).");

        this.evoluer();
        personnage.verifierSante();
    }
}


/**
 * Guerrier hérite de Personnage
 */
class Guerrier extends Personnage { 
    constructor(pseudo) { 
        super(pseudo, "Guerrier", 350, 50);
    }

    attaquer(personnage) {
        personnage.sante -= this.attaque;

        console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée (" + this.attaque + " dégâts).");

        this.evoluer();
    }

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;

        console.log(this.pseudo + " attaque avec son coup spécial haches de guerres " + personnage.pseudo + " (" + this.attaque * 5 + " dégâts).");

        personnage.verifierSante();

        this.evoluer();
    }
}


// TEST

var gandalf = new Magicien('Gandalf');
var thor    = new Guerrier('Thor');

console.log(thor.informations);
console.log(gandalf.informations);

gandalf.attaquer(thor);
//console.log(thor.informations);

thor.attaquer(gandalf);
console.log(gandalf.informations);

gandalf.coupSpecial(thor);
        
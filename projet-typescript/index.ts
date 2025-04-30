//mport{Log} from './decorateur'

import { Log } from "./decorateur";

const message :string="Bonjour, nouveau script"

console.log(message);

// Type

let valeur:any=2
if(typeof valeur==="string"){
    console.log(valeur.toUpperCase());
}
else{
    console.log("Erreur de type")
}

//Fonction

function calcul(nb:number):number{

    let result:number=3.14*nb;
    return result;
}
const recup = calcul(valeur);
console.log(recup); 

// Interface

interface Name {
    nom: string;
    prenom: string;
    age: number;
    isActive: boolean;
}


var infoUser: Name;

infoUser = {
    nom:"Koné",
    prenom:"Rokia",
    age: 15,
    isActive:true
}

console.log(infoUser);

infoUser.nom = "Diabagaté";
console.log(infoUser)


// Tableaux

let nombre:number[]=[1,2,3];

infoUser.age= nombre[2]
console.log(infoUser);

infoUser.age= nombre[1]
console.log(infoUser);

//Inverse tableau

console.log(nombre);

const rev = reverse(nombre)

console.log(rev);

function reverse<T>(nb:T[]):T[]{

	let reversed = [];

	for(let i=nb.length-1; i>=0; i--) {

		reversed.push(nb[i]);
	}
		return reversed; 

}

//Concatenation de deux types

let latlong: [number, number]=[3.66, 1.6]

type identifier = string | number;

let id: identifier= "1ab23"

console.log(id);

//Decorateur

function Long(target: any, key: string, desc: PropertyDescriptor) {
 const original = desc.value;
 desc.value = function () {
   console.log(key);
    eturn original.apply(this);
  //};
//} 


class Decorateur{

testdeco() {
	return "test reussie";
	}
}

let decorateur = new Decorateur();

decorateur.testdeco();

console.log(decorateur.testdeco());

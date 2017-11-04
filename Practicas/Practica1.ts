// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:[string,string] = [batman,superman];
var villano:[string, number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:Array<string> = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{flash=5,superman=100,batman=1,acuaman=0}
var fuerzaFlash:Fuerza = Fuerza.flash;
var fuerzaSuperman:Fuerza = Fuerza.superman;
var fuerzaBatman:Fuerza = Fuerza.batman;
var fuerzaAcuaman:Fuerza = Fuerza.acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda(){
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder:string = "100";
var largoDelPoder:number = poder.length;
console.log( largoDelPoder );

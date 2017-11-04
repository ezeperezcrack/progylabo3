
///<reference path="./Clases.ts"/>
///<reference path="./Perro.ts"/>
///<reference path="./Gato.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
var perro:animales.Perro= new animales.Perro("firulais");
var gato:animales.Gato= new animales.Gato("mishi");
var nombre:Array<animales.Animal>= new Array<animales.Animal>();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function(animal:animales.Animal){
    console.log("soy "+ animal.name);
    animal.hacerRuido();
});
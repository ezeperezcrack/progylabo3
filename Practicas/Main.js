///<reference path="./Clases.ts"/>
///<reference path="./Perro.ts"/>
///<reference path="./Gato.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
var perro = new animales.Perro("firulais");
var gato = new animales.Gato("mishi");
var nombre = new Array();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function (animal) {
    console.log("soy " + animal.name);
    animal.hacerRuido();
});

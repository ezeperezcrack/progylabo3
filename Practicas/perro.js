///<reference path="./Clases.ts"/>
var animales;
(function (animales) {
    class Perro extends animales.Animal {
        constructor(name) {
            super(name);
        }
        hacerRuido() {
            console.log("guau");
        }
    }
    animales.Perro = Perro;
})(animales || (animales = {}));

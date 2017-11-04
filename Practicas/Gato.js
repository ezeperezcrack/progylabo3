///<reference path="./Clases.ts"/>
var animales;
(function (animales) {
    class Gato extends animales.Animal {
        constructor(name) {
            super(name);
        }
        hacerRuido() {
            console.log("miau");
        }
    }
    animales.Gato = Gato;
})(animales || (animales = {}));

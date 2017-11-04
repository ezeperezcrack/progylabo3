var animales;
(function (animales) {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        hacerRuido() {
        }
    }
    animales.Animal = Animal;
})(animales || (animales = {}));

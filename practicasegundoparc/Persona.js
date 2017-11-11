var People;
(function (People) {
    var Persona = /** @class */ (function () {
        function Persona(name, surname, email) {
            this.nombre = name;
            this.apellido = surname;
            this.email = email;
        }
        return Persona;
    }());
    People.Persona = Persona;
})(People || (People = {}));

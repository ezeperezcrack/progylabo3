///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
function Guardar() {
    var nombre = String($("#nom").val());
    var email = String($("#email").val());
    var apellido = String($("#ape").val());
    var profesion = String($("#prof").val());
    var empleado = new People.Empleado(nombre, apellido, email, profesion);
    if ()
        localStorage.setItem("empleado", JSON.stringify(empleado));
}

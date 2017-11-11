///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>

function Guardar()
{
    var nombre:string = String($("#nom").val());
    var email:string = String($("#email").val());
    var apellido:string= String($("#ape").val());
    var profesion:string = String($("#prof").val());
    var empleado:People.Empleado = new People.Empleado(nombre,apellido,email,profesion);
    if()
    localStorage.setItem("empleado",JSON.stringify(empleado));
}
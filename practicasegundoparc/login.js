///<reference path="./node_modules/@types/jquery/index.d.ts"/>
$(document).ready(function () {
    localStorage.setItem("usuario", "eze@utn.com");
    localStorage.setItem("claveUsuario", "hola");
});
function Ingresar() {
    var email = $("#email").val();
    var clave = $("#clave").val();
    var user = localStorage.getItem("usuario");
    var pass = localStorage.getItem("claveUsuario");
    if (email === user && clave === pass) {
        window.location.replace("./index.html");
    }
    else {
        alert("LApifiaste");
    }
}

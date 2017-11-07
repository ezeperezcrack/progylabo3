///<reference path="./Usuario.ts"/>
///<reference path="./Cliente.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>

$(document).ready(function(){
    localStorage.setItem("claveUsuario","1234");
    localStorage.setItem("claveCliente","hola");
});


function CargarAdm(){
    $("#email").val("admin@utn.com");
    $("#clave").val(localStorage.getItem("claveAdmin"));
}
function CargarUser(){
    $("#email").val("usuario@utn.com");
    $("#clave").val(localStorage.getItem("claveUsuario"));
}

function Ingresar(){
    var email = $("#email").val();
    var clave = $("#clave").val();
    var funcionAjax = $.ajax({
        url:"http://localhost:80/Estacionamiento/Clases/ingreso.php",
        type:"POST",
        data:{  email,
                clave
        }
    }).then(function(retorno){
        console.log(retorno);
        if(retorno === "Acceso permitido"){
            localStorage.setItem("email",$("#email").val());
            window.location.replace("./index.html");
        }
    });
}

function Guardar()
{
    var patente = $("#patente").val();
    var email = localStorage.getItem("email");
    var color= $("#color").val();
    var marca = $("#marca").val();
    var funcionAjax = $.ajax({
        url:"http://localhost:80/Estacionamiento/Clases/guardar.php",
        type: "POST",
        data: { patente,
                email,
                marca,
                color
        }
    }).then(function(retorno){
        console.log(retorno);
        if(retorno === "ok"){
            alert("Ingresado correctamente");
        }
    });
}

function Borrar()
{
    var patente = $("#patente").val();
    var email = localStorage.getItem("email");
    var color= $("#color").val();
    var marca = $("#marca").val();
    var funcionAjax = $.ajax({
        url:"http://localhost:80/Estacionamiento/Clases/borrar.php",
        type: "POST",
        data: { patente,
                email,
                marca,
                color
        }
    }).then(function(retorno){
        console.log(retorno);
        if(retorno === "ok"){
            alert("Borrado correctamente");
        }
    });
}
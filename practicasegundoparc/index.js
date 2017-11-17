///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
$(document).ready(function () {
    OcultarCarga("#form1");
    OcultarCarga("#modif");
    MakeActive("#mostrar");
    Inicio();
    TraerLista();
});
var libDBA = {};
var datos = new Array();
var SoloDBA = function () {
    datos = JSON.parse(localStorage.getItem("empleados"));
    libDBA = datos.filter(function (item) {
        if (item.profesion === 'dba') {
            return item;
        }
    });
    var i;
    $("#tablita").html("<thead></thead>");
    var cuerpo = $("#tablita").html();
    cuerpo = cuerpo + "<thead><tr><th>Nombre</th><th>Apellido</th><th>Mail</th><th>Profesion</th></tr></thead><tbody>";
    for (i = 0; i < libDBA.length; i++) {
        cuerpo = cuerpo + "<tr><td>" + libDBA[i].nombre + "</td><td>" + libDBA[i].apellido + "</td><td>" + libDBA[i].email + "</td><td>" + libDBA[i].profesion + "</td></tr>";
    }
    cuerpo = cuerpo + "</tbody>";
    $("#tablita").html(cuerpo);
    MostrarCarga("#tablita");
    OcultarCarga("#tabla");
};
var libMail = {};
var SoloMail = function () {
    datos = JSON.parse(localStorage.getItem("empleados"));
    libMail = datos.map(function (item) {
        return item.email;
    });
    var i;
    $("#tablita").html("<thead></thead>");
    var cuerpo = $("#tablita").html();
    cuerpo = cuerpo + "<thead><tr><th>Mail</th></tr></thead><tbody>";
    for (i = 0; i < libMail.length; i++) {
        cuerpo = cuerpo + "<tr><td>" + libMail[i] + "</td></tr>";
    }
    cuerpo = cuerpo + "</tbody>";
    $("#tablita").html(cuerpo);
    MostrarCarga("#tablita");
    OcultarCarga("#tabla");
};
var libProg;
var SoloProg = function () {
    datos = JSON.parse(localStorage.getItem("empleados"));
    var acum;
    libProg = datos.reduce(function (acum, emp) {
        if (emp.profesion === 'programador') {
            acum++;
        }
        return acum;
    }, 0);
    var porcentaje = libProg / datos.length;
    porcentaje = porcentaje * 100;
    console.log(porcentaje + "%");
};
function TraerLista() {
    $("#cuerpo").html("<tr></tr>");
    var i;
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var cuerpo = $("#cuerpo").html();
    for (i = 0; i < ListaEmpleados.length; i++) {
        cuerpo = cuerpo + "<tr><td>" + ListaEmpleados[i].nombre + "</td><td>" + ListaEmpleados[i].apellido + "</td><td>" + ListaEmpleados[i].email + "</td><td>" + ListaEmpleados[i].profesion + "</td><td><button id='borrar' onclick='eliminarPersona(" + i + ")' >Borrar</button><button id='modificar' onclick='MostrarCarga(form1), MakeInactive(mostrar), MakeInactive(Ver), MakeActive(agregar),modificarPersona(" + i + "), MostrarCarga(modif), OcultarCarga(cargar)' >Modificar</button</td></tr>";
    }
    $("#cuerpo").html(cuerpo);
    MostrarCarga("#tabla");
    OcultarCarga("#tablita");
}
function eliminarPersona(indice) {
    var i;
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var newArray = Array();
    for (i = 0; i < ListaEmpleados.length; i++) {
        if (ListaEmpleados[indice] != ListaEmpleados[i]) {
            newArray.push(ListaEmpleados[i]);
        }
    }
    localStorage.setItem("empleados", JSON.stringify(newArray));
    TraerLista();
}
function modificarPersona(i) {
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    $("#nom").val(ListaEmpleados[i].nombre);
    $("#email").val(ListaEmpleados[i].email);
    $("#ape").val(ListaEmpleados[i].apellido);
    $("#prof").val(ListaEmpleados[i].profesion);
    localStorage.setItem("indice", i);
}
function Inicio() {
    var list = JSON.parse(localStorage.getItem("empleados"));
    if (list == null) {
        var ListaEmpleados = new Array();
        localStorage.setItem("empleados", JSON.stringify(ListaEmpleados));
    }
}
function Guardar() {
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var nombre = String($("#nom").val());
    var email = String($("#email").val());
    var apellido = String($("#ape").val());
    var profesion = String($("#prof").val());
    var empleado = new People.Empleado(profesion, nombre, apellido, email);
    ListaEmpleados.push(empleado);
    localStorage.setItem("empleados", JSON.stringify(ListaEmpleados));
    TraerLista();
    $("#form1")[0].reset();
}
function MostrarCarga(id) {
    $(id).show();
}
function OcultarCarga(id) {
    $(id).hide();
}
function MakeActive(id) {
    $(id).addClass("active");
}
function MakeInactive(id) {
    $(id).removeClass("active");
}
function Modif() {
    var i = localStorage.getItem("indice");
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var nombre = String($("#nom").val());
    var email = String($("#email").val());
    var apellido = String($("#ape").val());
    var profesion = String($("#prof").val());
    console.log(ListaEmpleados[i]);
    var empleado = new People.Empleado(profesion, nombre, apellido, email);
    ListaEmpleados[i] = empleado;
    console.log(ListaEmpleados[i]);
    localStorage.setItem("empleados", JSON.stringify(ListaEmpleados));
    TraerLista();
    $("#form1")[0].reset();
}

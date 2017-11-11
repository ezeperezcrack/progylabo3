///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
$(document).ready(function () {
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
    $("#cuerpo").html("<tr></tr>");
    var cuerpo = $("#cuerpo").html();
    for (i = 0; i < libDBA.length; i++) {
        cuerpo = cuerpo + "<tr><td>" + libDBA[i].nombre + "</td><td>" + libDBA[i].apellido + "</td><td>" + libDBA[i].email + "</td><td>" + libDBA[i].profesion + "</td><td>BOTONES PARA BORRAR</td></tr>";
    }
    $("#cuerpo").html(cuerpo);
};
var libMail = {};
var SoloMail = function () {
    datos = JSON.parse(localStorage.getItem("empleados"));
    libMail = datos.map(function (item) {
        return item.email;
    });
    var i;
    $("#cuerpo").html("<tr></tr>");
    var cuerpo = $("#cuerpo").html();
    for (i = 0; i < libMail.length; i++) {
        cuerpo = cuerpo + "<tr><td></td><td></td><td>" + libMail[i] + "</td><td></td><td>BOTONES PARA BORRAR</td></tr>";
    }
    $("#cuerpo").html(cuerpo);
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
    console.log(porcentaje);
};
function TraerLista() {
    $("#cuerpo").html("<tr></tr>");
    var i;
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var cuerpo = $("#cuerpo").html();
    for (i = 0; i < ListaEmpleados.length; i++) {
        cuerpo = cuerpo + "<tr><td>" + ListaEmpleados[i].nombre + "</td><td>" + ListaEmpleados[i].apellido + "</td><td>" + ListaEmpleados[i].email + "</td><td>" + ListaEmpleados[i].profesion + "</td><td><button onclick='eliminarPersona(" + i + ")' >Borrar</button></td><td><button onclick='modificarPersona(" + i + ")' >Modificar</button</td></tr>";
    }
    $("#cuerpo").html(cuerpo);
}
function eliminarPersona(indice) {
    var i;
    var ListaEmpleados = JSON.parse(localStorage.getItem("empleados"));
    var newArray = Array(); //:Array<People.Persona> = new Array<People.Persona>();
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
}

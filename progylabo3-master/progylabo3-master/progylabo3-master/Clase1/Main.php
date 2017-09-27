<?php
include_once"./Clases/Persona.php";
include_once "./Clases/Instituto.php";
include_once "./Clases/Profesor.php";
include_once "./Clases/Alumno.php";

$a1=new Alumno("Carlos","Perez","m",1234);
$a2=new Alumno("Carlas","Peraz","f",1243);
$a3=new Alumno("Corlos","Porez","m",1222;
$a4=new Alumno("Carles","Pirez","m",1233);

$pro1=new Profesor("Charlos","Porez","m",222);
$pro2=new Profesor("Charles","Purez","m",223);

$aula1=new aula(1,$pro1);
$aula2=new aula(2,$pro2);

array_push($aula1,$a1,$a2);
array_push($aula2,$a3,$a4);

$insti=new Instituto();
array_push($insti->ListaAula,$au)


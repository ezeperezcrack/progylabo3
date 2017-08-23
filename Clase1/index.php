<?php
include_once"./Clases/Persona.php";
include"./Clases/Policia.php";
Persona::saludarDos();
$persona=new Persona("tom");
$persona->saludar();
//Persona::saludar(); tira error por el this de la funcion de instancia accedido por la clase
$persona->saludarDos();


/*
$a=9;$b=6;$c=8;
if($a>$b && $a>$c)
{
    if($b>$c)
    {
        echo "$b";
    }else
    {
        echo "$c";
    }
} else if()*/







/*$fecha=date("d-m-y h:i:s"); EJERCICIO 2
$mes=date("m");
$dia=date("d");
if($mes>9 && $mes < 12 && $dia >20 && $dia <21 ) algo asi, pero bien hecho



echo "$fecha";*/














/*for ($i=0;;$i++) EJERCICIO 1
{
   
    $acum+=$i;
    if($acum>1000)
    {
        $acum-=$i;
        break;
    } 
     echo"$i";
}
echo"Acumulado: "."$acum";*/



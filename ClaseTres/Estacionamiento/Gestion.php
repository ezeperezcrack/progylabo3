<?php

include_once "./Clases/Estacionamiento.php";
    $patente=$_POST['a1'];//Para usar con postman
    $accion=$_POST['a2'];//Bajar el postman para probarlos
    $foto;//se va a agregar una carpeta que contenga foto con patente y fecha(por si viene dos veces el mismo vehiculo) 
    $a=new Vehiculo("AAA333");
    $a->fechingreso=date("Y/m/d H:i:s");
//var_dump($_GET);
//var_dump($_POST);
//var_dump($patente);
//var_dump($accion);
//var_dump($a);

Estacionamiento::Guardar($a);
/*
-Si la accion es guardar, pasar el vehiculo al metodo guardar de estacionamiento
-Si la accion es sacar, se llamara al metodo sacarDeEstacionamiento pasandole el vehiculo como parametro
*/

//move upload file buscar
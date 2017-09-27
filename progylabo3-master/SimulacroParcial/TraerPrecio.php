<?php
include_once "./Producto.php";

$codigo = $_POST["codigo"];
$nombre = $_POST["nombre"];

Producto::Sacar($codigo,$nombre);
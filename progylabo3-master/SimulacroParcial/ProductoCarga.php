<?php
include_once "./Producto.php";

Producto::Guardar($_GET['nombre'],$_GET['codigoBarra'],$_GET['precio']);
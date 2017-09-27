<?php
// var_dump($_FILES);
// die;
// if($_FILES["a"]["type"]=="image/png")
// {
//     if($_FILES["a"]["size"])
// }

//$destino = "./fotos/".$_FILES["a"]["name"];

$destino="./fotos/fotoUno.png";
//unlink("./fotos/fotoUno.png"); unlink me sirve para pisar el archivo del path y poder traer el nuevo a la carpeta con la linea sig
move_uploaded_file($_FILES["a"]["tmp_name"], $destino); 

$im = imagecreatefrompng("./fotos/fotoUno.png");
$estampa = imagecreatefrompng('./fotos/fotoDos.png');

// Establecer los márgenes para la estampa y obtener el alto/ancho de la imagen de la estampa
$margen_dcho = 10;
$margen_inf = 10;
$sx = imagesx($estampa);
$sy = imagesy($estampa);

// Copiar la imagen de la estampa sobre nuestra foto usando los índices de márgen y el
// ancho de la foto para calcular la posición de la estampa. 
imagecopy($im, $estampa, imagesx($im) - $sx - $margen_dcho, imagesy($im) - $sy - $margen_inf, 0, 0, imagesx($estampa), imagesy($estampa));

// Imprimir y liberar memoria
header('Content-type: image/png');
imagepng($im);
imagepng($im,"./fotos/merged/".$_POST["checho"].".png");//no 
imagedestroy($im);


?>
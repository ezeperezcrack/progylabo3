<?php
include_once "./Clases/Vehiculo.php";
class Estacionamiento
{
    public static function Guardar($auto)//guardar toma el vehiculo y lo guarda en un archivo
    {//var_dump($auto->patente);
        $archivo=fopen("./Archivos/estacionados.txt","a");
        fwrite($archivo,$auto->patente."-".$auto->fechingreso."\n");
        fclose($archivo);
        /*
            Abre el archivo guarda y sale
            -abrir un puntero a un archivo
            -escribir en un archivo
            -cerrar archivo

         */
    }
    public static function Sacar($auto)/*para sacar hay que matchear, calcular el tiempo en segundos y sacarlo de la lista estacionado*/
    {
        $archivo=fopen("./Archivos/estacionados.txt","r");
        while(!feof($archivo))
        {
            $string=fgets($archivo);
            $arrayAuto=explode("-",$string);
            
        }
        /* 
            -lee con el explode
            - verificar si lo encuentra
            -calcula el costo(comparar con la fecha actual y fechingreso) mediante -strtotime- 
            -sacar del array 
            -guardar en estacionado sin el elemento
            -guardar el elemento como facturado en facturado.txt 
        */
        
    }
}


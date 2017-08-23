<?php
class Persona
{
    public $nombre;
    public $apellido;
    public $dni;

    function __construct($nombre, $apellido="",$dni=0) //si seteo con valor o "" declara como opcional ese parametro (null={})
    {
        $this->nombre=$nombre;
    }


    function saludar()
    {
        echo "$this->nombre";
    }

    static function saludarDos()
    {
        echo"Hola2";
    }
}


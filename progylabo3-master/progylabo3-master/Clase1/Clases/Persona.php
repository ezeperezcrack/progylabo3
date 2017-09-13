<?php
abstract class Persona
{
    private $_nombre;
    private $_apellido;
    private $_sexo;

    function __construct($nombre, $apellido,$dni) //si seteo con valor o "" declara como opcional ese parametro (null={})
    {
        $this->_nombre=$nombre;
        $this->_apellido=$apellido;
        $this->_sexo=$sexo;
    }

    public abstract function MostrarDatos();


   /* function saludar()
    {
        echo "$this->nombre";
    }

    static function saludarDos()
    {
        echo"Hola2";
    }*/
}


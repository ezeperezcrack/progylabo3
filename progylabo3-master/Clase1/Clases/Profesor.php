<?php

include_once"./Clases/Persona.php";
class Profesor extends Persona
{
    public $legajo;
    function __Profesor($nombre, $apellido,$sexo,$legajo)
    {
        parent::__construct($nombre, $apellido,$sexo);
        $this->legajo=$legajo;
        
    }
     public function MostrarDatos()
     {
         return " Legajo ".$this->legajo ." Nombre ". $this->_nombre ." Apellido ". $this->_apellido ." Sexo ".$this->_sexo;
     }
}
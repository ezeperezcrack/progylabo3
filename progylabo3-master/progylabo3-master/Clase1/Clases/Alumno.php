<?php
 include_once"./Clases/Persona.php";
class Alumno extends Persona
{
    public $libreta;

    function __Alumno($nombre, $apellido,$sexo,$libreta)
    {
        parent::__construct($nombre, $apellido,$sexo);
        $this->libreta=$libreta;
        
    }
     public function MostrarDatos()
     {
         return " Libreta ".$this->libreta ." Nombre ". $this->_nombre ." Apellido ". $this->_apellido ." Sexo ".$this->_sexo;
     }

}
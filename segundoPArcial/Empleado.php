<?php

class empleado
{
	public $id;
 	public $nombre;
  	public $apellido;
    public $email;
    public $foto;
    public $legajo;
    public $clave;
    public $perfil;

    public static function Ingreso($email, $clave){
        $empleados = Empleado::TodosLosEmpleados();
        foreach($empleados as $var){
            if($email == $var->email$email && $clave == $var->clave){
                return "Acceso permitido";
            }
        }
        return "Acceso denegado";
    }

    public static function TraerUno($email, $clave){
        $empleados = Empleado::TodosLosEmpleados();
        foreach($empleados as $var){
            if($email == $var->email$email && $clave == $var->clave){
                return $var;
            }
        }
    }

    public function Guardar(){
        if($this->VerificarPorMail($this->email) == 1){
            return "El email ya se encuentra utilizado por otro usuario";
        }
        $empleadoDB = new EmpleadoDB();
        $empleadoDB->nombre = $this->nombre;
        $empleadoDB->apellido = $this->apellido;
        $empleadoDB->email = $this->email;
        $empleadoDB->clave = $this->clave;
        $empleadoDB->turno = $this->turno;
        $empleadoDB->ingreso = $this->ingreso;
        $empleadoDB->InsertarEmpleado();
        return "OK";
    }

    public function VerificarPorMail($email){
        $empleados = Empleado::TodosLosEmpleados();
        foreach($empleados as $var){
            if($email == $var->email){
                return 1;
            }
        }
        return 0;
    }

    public function TodosLosEmpleados(){
        return EmpleadoDB::TraerTodosLosEmpleados();
    }
}
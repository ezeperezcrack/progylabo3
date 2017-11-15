<?php
class empleadoDB
{
	public $id;
 	public $nombre;
  	public $apellido;
    public $email;
    public $foto;
    public $legajo;
    public $clave;
    public $perfil;

    public static function TraerUnEmp($email, $clave) 
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
            $consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from empleados where email =:email AND clave=:clave");
            $consulta->bindValue(':email', $email, PDO::PARAM_STR);
            $consulta->bindValue(':clave', $clave, PDO::PARAM_STR);
            $consulta->execute();
			$empleado = $consulta->fetchObject('EmpleadoDB');
			return $empleado;   				
			
    }
    
    public function InsertarEmpleado()
	{
			   $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			   $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into empleados (id,nombre,apellido,clave,mail,legajo,perfil)values(:id,:nombre,:apellido,:clave,:mail,:legajo,:perfil)");
               $consulta->bindValue(':id',$this->nombre, PDO::PARAM_STR);
               $consulta->bindValue(':nombre',$this->nombre, PDO::PARAM_STR);
			   $consulta->bindValue(':apellido', $this->apellido, PDO::PARAM_STR);
			   $consulta->bindValue(':mail', $this->mail, PDO::PARAM_STR);
			   $consulta->bindValue(':clave', $this->clave, PDO::PARAM_STR);
               $consulta->bindValue(':legajo', $this->legajo, PDO::PARAM_STR);
               $consulta->bindValue(':perfil', $this->perfil, PDO::PARAM_STR);

			   $consulta->execute();		
			   return $objetoAccesoDato->RetornarUltimoIdInsertado();
    }
    
    public static function TraerTodosLosEmpleados()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * from empleados");
			$consulta->execute();			
			return $consulta->fetchAll(PDO::FETCH_CLASS, "EmpleadoDB");
	}
}

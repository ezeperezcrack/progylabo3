<?php
class Instituto
{
    public $ListaAula=array();
    public function __Instituto()
    {
        $this->ListaAula=array();
    }


    public function recorrerAulasAPL($value)
    {
        foreach($ListaAula as $la)
        {
            return $la->buscarAlumnoPorLibreta($value);
            //$la->buscarAlumnoPorNombre($value);
            //$la->buscarProfesorPorLegajo($value);
        }
    }
    public function recorrerAulasAPN($value)
    {
        foreach($ListaAula as $la)
        {
            //return $la->buscarAlumnoPorLibreta($value);
            return $la->buscarAlumnoPorNombre($value);
            //$la->buscarProfesorPorLegajo($value);
        }
    }
    public function recorrerAulasPPL($value)
    {
        foreach($ListaAula as $la)
        {
            //return $la->buscarAlumnoPorLibreta($value);
            //$la->buscarAlumnoPorNombre($value);
            return $la->buscarProfesorPorLegajo($value);
        }
    }


}
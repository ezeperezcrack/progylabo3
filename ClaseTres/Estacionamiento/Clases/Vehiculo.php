<?php
class Vehiculo
{
   public $patente;
   public $fechingreso;
   public $fechegreso;
   public $importe;

   function __construct($patente)
   {
       $this->patente=$patente;
   }
}
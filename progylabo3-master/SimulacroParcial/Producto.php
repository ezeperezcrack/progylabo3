<?php  
class Producto
{
   public $nombre;
   public $codigoBarra;
   public $precio;

   function __construct($nombre,$codigoBarra,$precio)
   {
       $this->nombre=$nombre;
       $this->codigoBarra=$codigoBarra;
       $this->precio=$precio;
   }

   public static function Guardar($nombre,$codigoBarra,$precio)
   {//var_dump($auto->patente);
       $prod=new Producto($nombre,$codigoBarra,$precio);
       $archivo=fopen("./Archivos/productos.txt","a");
       fwrite($archivo,$prod->nombre."-".$prod->codigoBarra."-".$prod->precio."\n");
       fclose($archivo);
   }

   public static function Sacar($codigo,$nombre)
   {
       $miarrayp=array();
       $archivo=fopen("./Archivos/productos.txt","r");
       while(!feof($archivo))
       {
           $string=fgets($archivo);//pincha porque siempre hay un dato que es un enter
            $arrayProd=explode("-",$string);
            $prod=new Producto($arrayProd[0],$arrayProd[1],$arrayProd[2]);
            array_push($miarrayp,$prod);
           
       } 
       foreach($miarrayp as $algo)
       {
           if($algo->codigoBarra==$codigo && $algo->nombre==$nombre)
           {
               echo $algo->precio;
           }
       }
   }

   public function tabla()
}
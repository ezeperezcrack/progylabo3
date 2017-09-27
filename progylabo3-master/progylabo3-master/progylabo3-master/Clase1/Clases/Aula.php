        <?php
        include_once "./Instituto.php";
         include_once "./Profesor.php";
         include_once "./Alumno.php";
        class Aula extends Instituto implements IMostrarPersonas 
        {
            public $profesor;
            public $numeroDeAula;
            public $personas;
            public function __Aula($numeroDeAula,$profesor)
            {
                $this->profesor=$profesor;
                $this->numeroDeAula=$numeroDeAula;
                $this->personas=array();
            }

            public function buscarAlumnoPorLibreta($alumno)
            {
                foreach($personas as $a)
                {
                    if($alumno->libreta==$a->libreta)
                    {
                        return $a;
                    }
                }
            }

            public function buscarAlumnoPorNombre($alumno)
            {
                foreach($personas as $a)
                {
                    if($alumno->nombre==$a->nombre)
                    {
                        return $a;
                    }
                }
            }

            public function buscarProfesorPorLegajo($Legajo)
            {
                if($this->profesor->legajo==$Legajo)
                {
                    return $this->profesor;
                }
            }
            function MostrarPersonas()
            {
                $string+=$this->profesor->MostrarDatos().<Br>;
                foreach($this->personas as $pe)
                {
                    $string+=$pe->MostrarDatos().<Br>;
                }
                return $string;
            }
        }

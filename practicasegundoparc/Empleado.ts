namespace People{
    export class Empleado extends Persona {
        profesion:string;
        constructor(profesion:string,name:string,surname:string,email:string){
            super(name,surname,email);
            this.profesion=profesion;
        }
    }
    
    }
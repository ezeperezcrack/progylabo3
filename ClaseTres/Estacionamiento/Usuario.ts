namespace Estacionamiento{
	export  class Usuario{
		nombre:string;
		apellido: string;
		edad:number;
		email:string;
		contraseña:string;
		turno:string;
	constructor(name:string,surname: string,year:number,mail:string,pass:string, tur:string){
        this.nombre = name;
        this.apellido = surname;
        this.edad = year;
        this.email = mail;
        this.contraseña = pass;
        this.turno = tur;
		}
	}
} 
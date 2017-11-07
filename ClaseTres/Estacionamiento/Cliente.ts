namespace Estacionamiento{
		export  class Cliente{
			nombre:string;
			apellido:string;
			marca:string;
			color:string;
			patente:string;
			discapacitado:boolean;
		constructor(mar:string,col:string,pat:string){
			this.marca = mar;
			this.color = col;
			this.patente = pat;
		}
	}
}
 
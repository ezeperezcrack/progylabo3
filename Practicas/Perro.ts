///<reference path="./Clases.ts"/>

namespace animales{
export class Perro extends Animal{
    name:string;
    constructor(name:string){
        super(name);
    }
    hacerRuido():void{
        console.log("guau");
    }
}
}
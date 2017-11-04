///<reference path="./Clases.ts"/>
namespace animales{
export  class Gato extends Animal{
    name:string;
    constructor(name:string){
        super(name);
    }
    hacerRuido():void{
        console.log("miau");
    }
}
}
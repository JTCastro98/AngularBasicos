//La didferencia entre un servicio y un componente es el decorador
//El decorador de un servicio es de tipo Injectable

//Puede ser una clase asbtracta en la cual colocaremos la información o los metodos para interactuar con fuentes externas
//Se utiliza mayormente con servicios HTTP

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//La propiedad injectable indica que es una clase que se va a poder inyectar a otras
@Injectable()
//Por ende se exporta la clase para poder ser utilizada por otros modulos
export class DbzService {

    //Se crea un arreglo de personajes en el cual se podran anexar nuevos personajes
    //Se coloca un "_" de estandar para especificar que es una propiedad privada
    private _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder:10200
      },
      {
        nombre: 'Veggeta',
        poder:9500
      }
    ];

    //Se puede acceder al arreglo privado mediante un metodo get
    //Los objetos son mandados por referencia
    //Se le puede anexar el hecho de que va a retornar un arreglo de tipo "Personaje"
    get personajes(): Personaje[] {
        // Se colocan las llaves cuadras para especificar que es de tipo arreglo
        // Se colocan los "..." para indicar que el metodo es un operador spread, es decir, 
        //separa los elementos diferentes que tiene esté arreglo y crea uno nuevo
        return [...this._personajes];
    }

    constructor() {
        // console.log('Servicio inicializado');
    }

    //Creamos el metodo que nos permitirá anexar nuevos personajes a nuestro arreglo privado de personajes
    agregarPersonaje( personaje: Personaje ){
      this._personajes.push(personaje);
    }




}
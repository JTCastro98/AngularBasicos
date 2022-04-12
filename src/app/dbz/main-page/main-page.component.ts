//Se importan los modulos pertenecientes a angular
import { Component } from '@angular/core';

//Se importan el modulo personaje creado por nosotros
import { Personaje } from '../interfaces/dbz.interface';

//Se crea una interfaz con los campos a utilizar
// interface Personaje {
//   nombre:string;
//   poder:number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

//Se exporta la clase MainPage para que pueda ser visbles por otros
export class MainPageComponent {

  //Se crea un arreglo de personajes en el cual se podran anexar nuevos personajes
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder:10200
    },
    {
      nombre: 'Veggeta',
      poder:9500
    }
  ];

  //Se crea el arreglo para poder crear e ingresar al arreglo padre.
  nuevoPersonaje: Personaje = {
    nombre: 'Vegito',
    poder: 15400
  }

  //Se crea una función para poder ingresar los valores de los nuevos personajes
  agregarNewCharacter(guerrerozZ: Personaje){
    // console.log(guerrerozZ);
    this.personajes.push(guerrerozZ);
  };
  
  //Se establece un parametro de recibimiento para que el evento puede ejecutarse de cualquier tipo de dato
  // agregar( event:any ){
  //   //Preveemos que el evento se ejecute de manera automatica

  //   event.preventDefault();
  //   console.log("GG");
  // }
}


//Se importan los modulos pertenecientes a angular
import { Component } from '@angular/core';

//Se importan el modulo personaje creado por nosotros
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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

  // personajes: Personaje[] = [];



  //Se crea el arreglo para poder crear e ingresar al arreglo padre.
  nuevoPersonaje: Personaje = {
    nombre: 'Vegito',
    poder: 15400
  }

  constructor() {}

  //Mediante un get se puede obtener la estructura del servicio
  // get personajes():Personaje[] {
  //   return this.dbzService.personajes;
  // }

  //Se crea una función para poder ingresar los valores de los nuevos personajes
  // agregarNewCharacter(guerrerozZ: Personaje){
  //   Debugger es una función propia de JavaScript que al ejecutarse en Chrome pausa la aplicación al llegar a esté apartado
  //    debugger;
  //    console.log(guerrerozZ);
  //   this.personajes.push(guerrerozZ);
  // };

  //Esto se conoce una inyección de dependencias 
  //Se inyecta el servicio en un componente
  // constructor( private dbzService: DbzService) {
  //   this.personajes = this.dbzService.personajes;
  // }  
  //Se establece un parametro de recibimiento para que el evento puede ejecutarse de cualquier tipo de dato
  // agregar( event:any ){
  //   //Preveemos que el evento se ejecute de manera automatica

  //   event.preventDefault();
  //   console.log("GG");
  // }
}


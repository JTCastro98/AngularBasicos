//Se importan los componenentes necesarios pertenecientes a angular
import { Component, EventEmitter, Input, Output} from '@angular/core';

//Se importa el modulo Personajes para poder utilizar la información perteneciente a esté
import { Personaje } from '../interfaces/dbz.interface';

//Se crean los componentes pertenecientes a esté modulo
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

//Exportamos la clase Agregar componente para que sea visible para otros componentes
export class AgregarComponent {  

  //Cuando el componente padre envia información hacía los hijos se utiliza el input
  //Obtenemos los nuevos personajes anexados al modulo padre.
  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  //Output: Se utiliza cuando el componente hijo emite un valor hacía el padre.
  //Creamos el evento de onNuevoPersonaje para enviar la información ingresada hacía el modulo padre.
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // cambiarNombre( event:any ){
  //   console.log( event.target.value );
  // }

  //Creamos una función llamada agregar la cual agregará un nuevo personaje al arreglo de personajes
  agregar(){
    //Si nuestro personaje no tiene ningún valor no regresa nada
    if(this.nuevoPersonaje.nombre.trim().length === 0){ return;}
    
    console.log(this.nuevoPersonaje);
    //Enviamos hacía nuestro componente padre la información agregada mediante el Out creado anteriormente
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    //Limpiamos los valores anteriores a nuestro arreglo de nuevoPersonaje
    this.nuevoPersonaje =  {
      nombre: '',
      poder: 0
    }
  }

}

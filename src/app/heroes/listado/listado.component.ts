//Se importa el componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

//Se exporta nuestro listado componente
export class ListadoComponent {

  //Creamos una cadena de tipo string con diferentes heroes
  heroes:string[] =['Spiderman','IronMan','Thor','CapitanAmerica', 'Hulk'];
  //Se crea una variable de tipo string inicializada vacía.
  heroesBorrados:string = '';

  //Se crea una clase para borrar a los herores de la cadena
  borrarHeroe () {
    //Los heroes borrados son almacenados en una variable
    this.heroesBorrados = this.heroes.shift() || '';
  }
}

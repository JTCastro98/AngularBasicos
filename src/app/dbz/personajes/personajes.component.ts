//Importamos los modulos pertenecientes a angular
import { Component, Input } from '@angular/core';

//Importamos el modulo de personaje que fue creado por nosotros
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

//Componentes requeridos
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

//Exportamos la clase de Personajes Componentes
export class PersonajesComponent {
 
  //Se recibe el arreglo padre solicitado con el Input
  //El arreglo nos trae a todos los personajes existentes en el arreglo padre.
  // @Input() personajes: Personaje[] = [];

  //Se obtienen los personajes mediante el metodo get del arreglo privado dentro del servicio
  get personajes() {
    return this.dbzService.personajes;
  }

  //iniciamos el constructor a nuestro servicio
  constructor( private dbzService: DbzService) {}
}

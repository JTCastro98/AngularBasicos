//Importamos los modulos pertenecientes a angular
import { Component, Input } from '@angular/core';

//Importamos el modulo de personaje que fue creado por nosotros
import { Personaje } from '../interfaces/dbz.interface';

//Componentes requeridos
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

//Exportamos la clase de Personajes Componentes
export class PersonajesComponent {

  //Se recibe el arreglo padre solicitado con el Input
  //El arreglo nos trae a todos los personajes existentes en el arreglo padre.
  @Input() personajes: Personaje[] = [];

}

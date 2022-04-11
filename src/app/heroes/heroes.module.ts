//Se hacen las importaciones necesarias para este modulo
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Se importan los modulos de heroes y el listado de heroes
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Se especifican las cosas que contiene este modulo, tales como los componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Que quiero que sea visible fuera de este modulo
    exports: [  
        ListadoComponent
    ],
    //Van los modulos
    imports:[
        CommonModule
    ]
})

//Se exporta el modulo de heroes para que sea visible para los demás modulos.
export class HeroresModule{}
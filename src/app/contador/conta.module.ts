
import { NgModule } from '@angular/core';
import { ContadorComponent } from './conta/contador.component';

@NgModule({
    //Se especifican las cosas que contiene este modulo, tales como los componentes
    declarations:[
        ContadorComponent
    ],
    //Que quiero que sea visible fuera de este modulo
    exports: [  
        ContadorComponent
    ],
})

//Se exporta el modulo de heroes para que sea visible para los demás modulos.
export class ContaModule{}
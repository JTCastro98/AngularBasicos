
//Importamos los modulos pertenecientes a angular
import { NgModule } from '@angular/core';

//Importamos el modulo de contador componentes para poder utilizar sus datos
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
//Importamos los modulos requeridos pertenecientes a angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importamos los modulos creados para que puedan ser accesibles.
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';




@NgModule({
  declarations: [
    //Declaramos los modulos creados
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    // Exportamos el modulo que queremos que sea visto como página principal en nuestro HTML general
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

//Exportamos la clase de dragon ball Z para que pueda ser vista por los demás modulos
export class DbzModule{}

//Importamos los componentes necesarios pertenecientes a angular
import { Component } from '@angular/core';

//Importamos los componentes requeridos
@Component({
    selector: 'app-contador',
    //Creamos un template que será usado en nuestro html
    template: `
        <h1> {{ titulo }} </h1>
        <h3> La base es: <strong> {{ base }} </strong> </h3>



        <button (click)="acumular(base)"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)"> - {{ base }} </button>
    `
})

//Exportamos el modulo de contador para que pueda ser visible desde otros modulos
export class ContadorComponent {

    //Creamos dos variables una llamada titulo de tipo string y otra llamada numero de tipo numerico
    titulo:string = 'Contador App';
    numero:number = 10;
  
    //Creamos una variable base con un valor establecido en diez
    public base:number = 10;
  
    //Creamos una funcion acomuladora la cual almacenará el valor de número
    acumular( valor:number) {
      this.numero += valor;
    }
  
    //crear una base con valor numero 5
  

}

//Se importan las clases pertenecientes de Angular
import { Component } from "@angular/core";

//Se incorpran los componentes necesarios
@Component({
    selector: 'app-heroe',
    templateUrl: `heroe.component.html`
})

//Creamos la clase de Hereos componente
export class HeroeComponent {

    // Creamos dos variables una de nombre de tipo string y otra de edad de tipo numerico
    nombre:string = 'IronMan';
    edad:number = 45;

    //Obtenemos el nombre del heroé desde el componente listado y lo cambiamos a todo mayusculas
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //Obtenemos el nombre y la edad de cada Heroé
    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    //Cambiamos el nombre visible en el html a uno distinto
    cambiarNombre():void {
        this.nombre = 'SpiderMan';
    }

    //Cambiamos la edad visible en el html a una distinta
    cambiarEdad():void {
        this.edad = 25;
    }
}
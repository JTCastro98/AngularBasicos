//Se importan los modulos pertenecientes a angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Se importan los modulos externos
import { AppComponent } from './app.component';

//Se importan los modulos creados por nosotros

//Se importa el modulo de heroes
import { HeroresModule } from './heroes/heroes.module';
//Se importa el modulo de contador
import { ContaModule } from './contador/conta.module';
//Se importa el modulo de dragon ball Z
import { DbzModule } from './dbz/dbz.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //Se importan los modulos que nosotros creamos, que son necesarios ser visibles para nuestro app.html
    
    
    //Se importa el modulo de Heroes
    HeroresModule,
    //Se importa el modulo de contador
    ContaModule,
    //Se importa el modulo de Dragon Ball Z
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

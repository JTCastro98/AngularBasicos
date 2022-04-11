import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Se importa el modulo de Heroes
import { HeroresModule } from './heroes/heroes.module';
import { ContaModule } from './contador/conta.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //Se importa el modulo de Heroes
    HeroresModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

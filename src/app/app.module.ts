import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { Binding2ViasComponent } from './views/binding2-vias/binding2-vias.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { DiretivaComponent } from './views/diretiva/diretiva.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    Binding2ViasComponent,
    Ex02Component,
    Ex03Component,
    DiretivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

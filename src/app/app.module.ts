import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { Vista2Component } from './components/componentesVista/vista2/vista2.component';
import { Vista3Component } from './components/componentesVista/vista3/vista3.component';
import { Vista4Component } from './components/componentesVista/vista4/vista4.component';
import { CabeceraReportesComponent } from './components/cabecera-reportes/cabecera-reportes.component';
import { ContenidoCarpetasComponent } from './components/contenido-carpetas/contenido-carpetas.component';
import { ContenidoReportesComponent } from './contenido-reportes/contenido-reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    MenuSuperiorComponent,
    Vista2Component,
    Vista3Component,
    Vista4Component,
    CabeceraReportesComponent,
    ContenidoCarpetasComponent,
    ContenidoReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

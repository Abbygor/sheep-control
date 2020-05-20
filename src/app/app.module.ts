import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeEngordaComponent } from './components/engorda/home-engorda/home-engorda.component';
import { LotesActivosEngordaComponent } from './components/engorda/lotes-activos-engorda/lotes-activos-engorda.component';
import { ListaBorregosEngordaComponent } from './components/engorda/lista-borregos-engorda/lista-borregos-engorda.component';
import { HomeCorderosComponent } from './components/corderos/home-corderos/home-corderos.component';
import { ListaCorderosComponent } from './components/corderos/lista-corderos/lista-corderos.component';
import { NuevoCorderoComponent } from './components/corderos/nuevo-cordero/nuevo-cordero.component';
import { DetalleCorderoComponent } from './components/corderos/detalle-cordero/detalle-cordero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeEngordaComponent,
    LotesActivosEngordaComponent,
    ListaBorregosEngordaComponent,
    HomeCorderosComponent,
    ListaCorderosComponent,
    NuevoCorderoComponent,
    DetalleCorderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

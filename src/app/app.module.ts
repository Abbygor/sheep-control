import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EngordaComponent } from './components/engorda/engorda.component';
import { HomeEngordaComponent } from './components/engorda/home-engorda/home-engorda.component';
import { LotesActivosComponent } from './components/engorda/lotes-activos/lotes-activos.component';
import { LotesActivosEngordaComponent } from './components/engorda/lotes-activos-engorda/lotes-activos-engorda.component';
import { ListaBorregosEngordaComponent } from './components/engorda/lista-borregos-engorda/lista-borregos-engorda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EngordaComponent,
    HomeEngordaComponent,
    LotesActivosComponent,
    LotesActivosEngordaComponent,
    ListaBorregosEngordaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

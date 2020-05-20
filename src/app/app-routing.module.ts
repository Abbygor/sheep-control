import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeEngordaComponent } from './components/engorda/home-engorda/home-engorda.component';
import { HomeCorderosComponent } from './components/corderos/home-corderos/home-corderos.component';
import { NuevoCorderoComponent } from './components/corderos/nuevo-cordero/nuevo-cordero.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'engorda', component: HomeEngordaComponent},
  {path: 'corderos', component: HomeCorderosComponent},
  
  {path: 'corderos/nuevo-cordero', component: NuevoCorderoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

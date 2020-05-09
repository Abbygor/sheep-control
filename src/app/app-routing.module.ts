import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeEngordaComponent } from './components/engorda/home-engorda/home-engorda.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home-engorda', component: HomeEngordaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

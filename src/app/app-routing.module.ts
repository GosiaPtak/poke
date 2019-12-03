import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './pages/poke-list/poke-list.component';
import { PokeDetailsComponent } from './pages/poke-details/poke-details.component';


const routes: Routes = [
  {path: '', component: PokeListComponent, pathMatch: 'full'},
  {path: 'details/:id', component: PokeDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

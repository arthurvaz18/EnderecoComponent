import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InformacoesComponent} from "./informacoes/informacoes.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'informacoes', component: InformacoesComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DxButtonModule, DxDrawerModule, DxListModule, DxToolbarModule} from "devextreme-angular";
import {HomeComponent} from "./home/home.component";
import {InformacoesComponent} from './informacoes/informacoes.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacoesComponent,
  ],
  imports: [
    BrowserModule,
    DxDrawerModule,
    DxListModule,
    DxToolbarModule,
    DxButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
  DxButtonModule,
  DxDrawerModule,
  DxFormModule,
  DxListModule,
  DxSelectBoxModule,
  DxToolbarModule, DxTreeListModule
} from "devextreme-angular";
import {HomeComponent} from "./home/home.component";
import {InformacoesComponent} from './informacoes/informacoes.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

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
    AppRoutingModule,
    DxSelectBoxModule,
    HttpClientModule,
    DxFormModule,
    DxTreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

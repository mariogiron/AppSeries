import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/series/lista-series/lista-series.component';
import { NuevaSerieComponent } from './components/series/nueva-serie/nueva-serie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    NuevaSerieComponent,
    DetalleSerieComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

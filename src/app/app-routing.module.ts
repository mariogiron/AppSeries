import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/series/lista-series/lista-series.component';
import { NuevaSerieComponent } from './components/series/nueva-serie/nueva-serie.component';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';

const routes: Routes = [
  { path: 'series', component: ListaSeriesComponent },
  { path: 'series/nueva', component: NuevaSerieComponent },
  { path: 'series/:idserie', component: DetalleSerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

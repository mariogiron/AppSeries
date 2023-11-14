import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';

const routes: Routes = [
  { path: 'series/:idserie', component: DetalleSerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

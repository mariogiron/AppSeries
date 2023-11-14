import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaSerieComponent } from './components/series/nueva-serie/nueva-serie.component';

const routes: Routes = [
  { path: 'series/nueva', component: NuevaSerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

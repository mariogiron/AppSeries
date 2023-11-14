import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/core/interfaces/serie.interface';
import { SeriesService } from 'src/app/core/services/series.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  seriesService = inject(SeriesService)

  id!: string
  serieSeleccionada!: Serie;

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      async params => {
        this.id = params['idserie']
        const response = await this.seriesService.getById(this.id)
        this.serieSeleccionada = response
      })

  }


}

import { Component, inject } from '@angular/core';
import { Serie } from 'src/app/core/interfaces/serie.interface';
import { SeriesService } from 'src/app/core/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent {

  arraySeries: Serie[] = [];

  seriesService = inject(SeriesService);

  async ngOnInit() {
    try {
      const response = await this.seriesService.getAll();
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

}

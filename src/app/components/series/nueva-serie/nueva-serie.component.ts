import { Component, inject } from '@angular/core';
import { Serie } from 'src/app/core/interfaces/serie';
import { SeriesService } from 'src/app/core/services/series.service';

@Component({
  selector: 'app-nueva-serie',
  templateUrl: './nueva-serie.component.html',
  styleUrls: ['./nueva-serie.component.css']
})
export class NuevaSerieComponent {

  serieService = inject(SeriesService)

  testSeries: Serie = { id: 3, title: "string", creator: "string", rating: 3, dates: "string", image: "string", channel: "string" }

  async ngOnInit() {
    try {
      const response = await this.serieService.create(this.testSeries)
      console.log(response)
    } catch (e: any) {
      console.log(e)
    }

  }

}

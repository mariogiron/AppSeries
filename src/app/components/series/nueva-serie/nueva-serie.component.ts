import { Component, inject } from '@angular/core';
import { Serie } from 'src/app/core/interfaces/serie';
import { SeriesService } from 'src/app/core/services/series.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nueva-serie',
  templateUrl: './nueva-serie.component.html',
  styleUrls: ['./nueva-serie.component.css']
})
export class NuevaSerieComponent {

  serieService = inject(SeriesService)

  nuevaSerieForm: FormGroup

  constructor() {

    this.nuevaSerieForm = new FormGroup({
      title: new FormControl(null, []),
      creator: new FormControl(null, []),
      rating: new FormControl(null, []),
      dates: new FormControl(null, []),
      image: new FormControl(null, []),
      channel: new FormControl(null, []),
    }
    )
  }

  // testSeries: Serie = { id: 3, title: "string", creator: "string", rating: 3, dates: "string", image: "string", channel: "string" }

  async onSubmit() {
    try {
      console.log(this.nuevaSerieForm.value)
      const response = await this.serieService.create(this.nuevaSerieForm.value)
      this.nuevaSerieForm.reset()

      console.log(response)
    } catch (e: any) {
      console.log(e)
    }

  }

}

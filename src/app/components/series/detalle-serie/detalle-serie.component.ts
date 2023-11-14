import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  id: string = ''

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.id = params['idserie']
    )
    this.router.navigate(['/series', this.id])
  }
}

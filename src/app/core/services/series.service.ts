import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private httpClient = inject(HttpClient)

  constructor() { }


  getAllChannels() {
    return firstValueFrom(this.httpClient.get('https://peticiones.online/api/series'))
  }

  getByChannel() {

  }

}




/* Dentro del servicio Series (core/services/series.service.ts) definimos el método getAllChannels que me devuelva todos los canales para poder visualizarlos en un select dentro de la NavBar */
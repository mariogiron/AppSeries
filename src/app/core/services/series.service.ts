import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient)

  serieUrl = 'https://peticiones.online/api/series'

  create(serie: Serie) {
    return firstValueFrom(this.httpClient.post<Serie>(this.serieUrl, serie))
  }


}

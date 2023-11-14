import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Serie } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private baseUrl: string = 'https://peticiones.online/api/series';
  private httpClient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl)
    )
  }

  create(serie: Serie) {
    return firstValueFrom(this.httpClient.post<Serie>(this.baseUrl, serie))
  }

  getById(id: string) {

    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${id}`)
    )
  }

  getAllChannels() {
    return firstValueFrom(this.httpClient.get(this.baseUrl))
  }


}


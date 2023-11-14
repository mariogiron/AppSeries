import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient)
  baseUrl = 'https://peticiones.online/api/series'

  getById(id: number) {
    return firstValueFrom(
      this.httpClient.get(`${this.baseUrl}/${id}`)
    )
  }



}

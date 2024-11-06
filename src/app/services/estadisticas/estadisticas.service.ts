import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  urlBack = environment.rutaApiBackend + '/api';
  constructor(private http: HttpClient) { 

  }

  async estadisticas() {
    let url = `${this.urlBack}/objetos/estadisticas`;
    return await lastValueFrom(this.http.get<any>(url));
  }

}

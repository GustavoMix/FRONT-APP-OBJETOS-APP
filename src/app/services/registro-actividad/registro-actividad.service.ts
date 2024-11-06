import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegistroActividadService {

  urlBack = environment.rutaApiBackend + '/api';
  constructor(private http: HttpClient) { 

  }

  async registroActividad() {
    let url = `${this.urlBack}/objetos/actividad`;
    return await lastValueFrom(this.http.get<any>(url));
  }

}

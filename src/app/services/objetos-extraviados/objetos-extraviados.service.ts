import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ObjetosExtraviadosService {
  urlBack = environment.rutaApiBackend + '/api';
  constructor(private http: HttpClient) { 

  }

  async ObjetosExtraviados() {
    let url = `${this.urlBack}/objetos/objetosExtraviados`;
    console.log(url);
    const response = await lastValueFrom(this.http.get<any>(url));
    console.log('API response:', response);
    return response;
  }

}

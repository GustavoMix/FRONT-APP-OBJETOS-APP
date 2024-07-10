import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  urlBack = environment.rutaApiBackend + '/api';
  constructor(private http: HttpClient) { 

  }

  async actividad() {
    let url = `${this.urlBack}/objetos/actividad`;
    console.log(url);
    return await lastValueFrom(this.http.get<any>(url));
  }


  // async cantLotesConfirmados(idLote: any, estado: any) {
  //   let url = `${this.baseUrl}/api/v1/boletas/cantLotesConfirmados?idLote=${idLote}&estado=${estado}`;
  //   console.log(url);
  //   return await lastValueFrom(this.http.get<any>(url));
  // }


  
}


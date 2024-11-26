// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { lastValueFrom } from 'rxjs';
// import { environment } from 'src/environments/environments';

// @Injectable({
//   providedIn: 'root'
// })
// export class EstadisticasService {
//   urlBack = environment.rutaApiBackend + '/api';
//   constructor(private http: HttpClient) { 

//   }

//   async estadisticas() {
//     let url = `${this.urlBack}/objetos/estadisticas`;
//     return await lastValueFrom(this.http.get<any>(url));
//   }

// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  urlBack = environment.rutaApiBackend + '/api';
  
  constructor(private http: HttpClient) { }

  async estadisticas() {
    const simulate = true; // Cambia a `false` cuando quieras usar el servicio real.

    if (simulate) {
      // Datos simulados
      return Promise.resolve({
        codigoRespuesta: "2000",
        mensaje: "Datos simulados correctamente",
        data: [
          { tipo: "Usuarios activos", valor: 120 },
          { tipo: "Sesiones activas", valor: 75 },
          { tipo: "Objetos registrados", valor: 50 }
        ]
      });
    } else {
      // Llamada real al servicio
      const url = `${this.urlBack}/objetos/estadisticas`;
      return await lastValueFrom(this.http.get<any>(url));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ObjetosEncontradosService } from 'src/app/services/objetos-encontrados/objetos-encontrados.service';

@Component({
  selector: 'app-objetos-encontrados',
  templateUrl: './objetos-encontrados.component.html',
  styleUrls: ['./objetos-encontrados.component.scss']
})
export class ObjetosEncontradosComponent implements OnInit {
  objetosEncontrados: any[] = [];

  constructor(private objetosService: ObjetosEncontradosService) {}

  ngOnInit(): void {
    this.getObjetosEncontrados();
  }

  async getObjetosEncontrados() {
    try {
      const response = await this.objetosService.ObjetosEncontrados();
      console.log('Received response:', response);  // Log the entire response
  
      if (response && response.codigoRespuesta === '2000' && Array.isArray(response.data)) {
        this.objetosEncontrados = response.data;
        console.log('Objetos Encontrados:', this.objetosEncontrados);  // Log the extracted data array
  
        this.objetosEncontrados.forEach(objeto => {
          if (objeto.fotoBase64 && objeto.fotoBase64.startsWith('data:image/jpeg;base64,')) {
            try {
              const byteCharacters = atob(objeto.fotoBase64.split(',')[1]);
              const byteArrays = [];
              for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                const slice = byteCharacters.slice(offset, offset + 512);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
              }
              const blob = new Blob(byteArrays, { type: 'image/jpeg' });
              objeto.fotoUrl = URL.createObjectURL(blob);
            } catch (error) {
              console.error('Error decoding base64:', error);
              // Handle the error as needed, e.g., set a placeholder image
              objeto.fotoUrl = 'assets/images/placeholder.jpg';
            }
          } else {
            // Handle case where fotoBase64 is not a valid image base64 string
            console.warn('No es una cadena base64 de imagen válida:', objeto.fotoBase64);
            objeto.fotoUrl = 'assets/images/placeholder.jpg'; // Otra imagen de marcador de posición o mensaje adecuado
          }
        });
        console.log('Objetos con Foto URL:', this.objetosEncontrados);  // Log the objects with updated photo URLs
      } else {
        console.error('Error: Unexpected response format or error code.');
      }
    } catch (error) {
      console.error('Error al obtener objetos encontrados', error);
    }
  }
}

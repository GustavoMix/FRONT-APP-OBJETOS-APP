import { Component } from '@angular/core';
import { ObjetosExtraviadosService } from 'src/app/services/objetos-extraviados/objetos-extraviados.service';

@Component({
  selector: 'app-objetos-extraviados',
  templateUrl: './objetos-extraviados.component.html',
  styleUrls: ['./objetos-extraviados.component.scss']
})
export class ObjetosExtraviadosComponent {
  objetosExtraviados: any[] = [];
  objetosFiltrados: any[] = [];
  currentCategory: string = '';
  selectedObjeto: any = null;

  constructor(private objetosService: ObjetosExtraviadosService) {}

  ngOnInit(): void {
    this.getObjetosExtraviados();
  }

  async getObjetosExtraviados() {
    try {
      const response = await this.objetosService.ObjetosExtraviados();
      console.log('Received response:', response);
  
      if (response && response.codigoRespuesta === '2000' && Array.isArray(response.data)) {
        this.objetosExtraviados = response.data;

        // Asignar categorías personalizadas basadas en 'nombre' o 'descripcion'
        this.objetosExtraviados.forEach(objeto => {
          objeto.categoria = this.getCategoria(objeto);
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
              objeto.fotoUrl = 'assets/images/placeholder.jpg';
            }
          } else {
            objeto.fotoUrl = 'assets/images/placeholder.jpg';
          }
        });

        // Mostrar todos los objetos inicialmente
        this.objetosFiltrados = this.objetosExtraviados;  
      } else {
        console.error('Error: Unexpected response format or error code.');
      }
    } catch (error) {
      console.error('Error al obtener objetos encontrados', error);
    }
  }

  getCategoria(objeto: any): string {
    // Aquí puedes definir cómo clasificar los objetos en diferentes categorías
    const nombreLower = objeto.nombre.toLowerCase();
    if (nombreLower.includes('cuaderno')) {
      return 'CUADERNOS';
    } else if (nombreLower.includes('lápiz') || nombreLower.includes('lapiz')) {
      return 'LAPICES';
    } else if (nombreLower.includes('bolígrafo') || nombreLower.includes('boligrafo')) {
      return 'BOLIGRAFOS';
    } else if (nombreLower.includes('goma')) {
      return 'GOMAS';
    } else if (nombreLower.includes('mochila')) {
      return 'MOCHILAS';
    } else if (nombreLower.includes('celular')) {
      return 'CELULARES';
    } else if (nombreLower.includes('credencial')) {
      return 'CREDENCIALES';
    } else {
      return 'OTROS';
    }
  }

  // Método para manejar el filtrado por categoría
  filterByCategory(category: string): void {
    this.currentCategory = category;

    if (category === '') {
      this.objetosFiltrados = this.objetosExtraviados;
    } else {
      this.objetosFiltrados = this.objetosExtraviados.filter(objeto => objeto.categoria === category);
    }

    console.log('Filtrando por categoría:', category, this.objetosFiltrados);
  }

  onSearchInput(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.objetosFiltrados = this.objetosExtraviados.filter(objeto => 
      objeto.nombre.toLowerCase().includes(searchTerm) ||
      objeto.descripcion.toLowerCase().includes(searchTerm)
    );
  }

  setSelectedObjeto(objeto: any): void {
    this.selectedObjeto = objeto;
  }
}

import { Component, OnInit } from '@angular/core';
import { ObjetosEncontradosService } from 'src/app/services/objetos-encontrados/objetos-encontrados.service';

@Component({
  selector: 'app-objetos-encontrados',
  templateUrl: './objetos-encontrados.component.html',
  styleUrls: ['./objetos-encontrados.component.scss']
})
export class ObjetosEncontradosComponent implements OnInit {
  objetosEncontrados: any[] = [];
  objetosFiltrados: any[] = [];
  currentCategory: string = '';
  selectedObjeto: any = null;

  constructor(private objetosService: ObjetosEncontradosService) {}

  ngOnInit(): void {
    this.getObjetosEncontrados();

    this.objetosFiltrados = this.objetosEncontrados; 
  }

  async getObjetosEncontrados() {
    try {
      const response = await this.objetosService.ObjetosEncontrados();
      console.log('Received response:', response);
  
      if (response && response.codigoRespuesta === '2000' && Array.isArray(response.data)) {
        this.objetosEncontrados = response.data;

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
              objeto.fotoUrl = 'assets/images/placeholder.jpg';
            }
          } else {
            objeto.fotoUrl = 'assets/images/placeholder.jpg';
          }
        });

        this.filterObjects();  
      } else {
        console.error('Error: Unexpected response format or error code.');
      }
    } catch (error) {
      console.error('Error al obtener objetos encontrados', error);
    }
  }

  onSearchInput(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    this.objetosFiltrados = this.objetosEncontrados.filter(objeto => 
      objeto.nombre.toLowerCase().includes(searchTerm) ||
      objeto.descripcion.toLowerCase().includes(searchTerm)
    );
  }

  setSelectedObjeto(objeto: any): void {
    this.selectedObjeto = objeto;
  }
  filterByCategory(category: string): void {
    if (category === '') {
      this.objetosFiltrados = this.objetosEncontrados;
    } else {
      this.objetosFiltrados = this.objetosEncontrados.filter(objeto => objeto.categoria === category);
    }
  }
  

  filterObjects(searchTerm: string = ''): void {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    this.objetosFiltrados = this.objetosEncontrados.filter(objeto => {
      const lowerCaseCategoria = objeto.categoria?.toLowerCase() || '';
      const matchesCategory = this.currentCategory
        ? lowerCaseCategoria === this.currentCategory.toLowerCase()
        : true;
  
      const matchesSearchTerm = (objeto.nombre?.toLowerCase().includes(lowerCaseSearchTerm) ||
                                 objeto.descripcion?.toLowerCase().includes(lowerCaseSearchTerm) ||
                                 lowerCaseCategoria.includes(lowerCaseSearchTerm));
  
      return matchesCategory && matchesSearchTerm;
    });
  
    console.log('Objetos Filtrados:', this.objetosFiltrados);
  }
  
  
}

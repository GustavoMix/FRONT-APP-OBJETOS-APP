import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { EstadisticasService } from 'src/app/services/estadisticas/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements AfterViewInit {
  private chart: any;

  constructor(private elementRef: ElementRef, private estadisticasService: EstadisticasService) { }

  ngAfterViewInit(): void {
    this.loadEstadisticas();
  }

  async loadEstadisticas(): Promise<void> {
    try {
      const response = await this.estadisticasService.estadisticas();
      if (response.codigoRespuesta === "2000" && response.data) {
        const usuariosActivos = this.extractValue(response.data, 'Usuarios activos');
        const sesionesActivas = this.extractValue(response.data, 'Sesiones activas');
        const objetosRegistrados = this.extractValue(response.data, 'Objetos registrados');
        const total = usuariosActivos + sesionesActivas + objetosRegistrados;
        this.createBarChart(
          this.calculatePercentage(usuariosActivos, total),
          this.calculatePercentage(sesionesActivas, total),
          this.calculatePercentage(objetosRegistrados, total)
        );
      } else {
        console.error('Error en la respuesta:', response.mensaje);
      }
    } catch (error) {
      console.error('Error al cargar las estadísticas:', error);
    }
  }

  createBarChart(usuariosActivos: number, sesionesActivas: number, objetosRegistrados: number): void {
    const ctx = this.elementRef.nativeElement.querySelector('#barChart').getContext('2d');
    const data = {
      labels: ['Usuarios activos', 'Sesiones activas', 'Objetos registrados'],
      datasets: [
        {
          label: 'Porcentaje',
          data: [usuariosActivos, sesionesActivas, objetosRegistrados],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ]
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white', 
            callback: (value: number | string) => {
              return typeof value === 'number' ? value + '%' : value;
            }
          }
        },
        x: {
          ticks: {
            color: 'white' 
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white' 
          }
        }
      }
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  private extractValue(data: any[], tipo: string): number {
    const item = data.find(item => item.tipo === tipo);
    return item ? item.valor : 0;
  }

  private calculatePercentage(value: number, total: number): number {
    return total > 0 ? (value / total) * 100 : 0;
  }
}

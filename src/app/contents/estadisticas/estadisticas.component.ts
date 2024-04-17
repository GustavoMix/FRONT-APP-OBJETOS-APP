import { Component, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  createBarChart(): void {
    const ctx = this.elementRef.nativeElement.querySelector('#barChart').getContext('2d');

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Objetos extraviados',
          data: [50, 40, 30, 20, 10],
          backgroundColor: 'rgba(255, 99, 132, 0.7)'
        },
        {
          label: 'Objetos buscados',
          data: [30, 35, 40, 45, 50],
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        },
        {
          label: 'Objetos recuperados',
          data: [20, 25, 30, 35, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.7)'
        }
      ]
    };

    const options = {
      scales: {
        x: { stacked: true }, 
        y: { stacked: true } 
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }


}

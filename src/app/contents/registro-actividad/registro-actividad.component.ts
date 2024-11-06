import { Component, OnInit } from '@angular/core';
import { RegistroActividadService } from 'src/app/services/registro-actividad/registro-actividad.service';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.scss']
})
export class RegistroActividadComponent implements OnInit {
  activities: any[] = [];
  displayedActivities: any[] = [];
  activitiesPerPage: number = 5;

  constructor(private registroActividadService: RegistroActividadService) {}

  ngOnInit(): void {
    this.fetchActivities();
  }

  async fetchActivities() {
    try {
      const response = await this.registroActividadService.registroActividad();
      this.activities = response.data || []; // Asegúrate de acceder a la propiedad correcta
      this.updateDisplayedActivities();
    } catch (error) {
      console.error('Error fetching activities', error);
    }
  }

  updateDisplayedActivities() {
    this.displayedActivities = this.activities.slice(0, this.activitiesPerPage);
  }

  onActivitiesPerPageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Aserción de tipo
    this.activitiesPerPage = +selectElement.value; // Convertir a número
    this.updateDisplayedActivities();
  }
}

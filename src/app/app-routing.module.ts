import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './contents/menu/menu.component';
import { LoginComponent } from './contents/login/login.component';
import { RegistraObjetosComponent } from './contents/registra-objetos/registra-objetos.component';
import { ContactosComponent } from './contents/contactos/contactos.component';
import { EstadisticasComponent } from './contents/estadisticas/estadisticas.component';
import { ObjetosEncontradosComponent } from './contents/objetos-encontrados/objetos-encontrados.component';
import { ObjetosExtraviadosComponent } from './contents/objetos-extraviados/objetos-extraviados.component';
import { RegistroActividadComponent } from './contents/registro-actividad/registro-actividad.component';
import { IaComponent } from './contents/ia/ia.component';
import { PadreObjetosComponent } from './contents/padre-objetos/padre-objetos.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [],
  },
  {
    path: 'contactos',
    component: ContactosComponent,
  },
  {
    path: 'estadisticas',
    component: EstadisticasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'objetos-encontrados',
    component: ObjetosEncontradosComponent,
  },
  {
    path: 'objetos-extraviados',
    component: ObjetosExtraviadosComponent,
  },
  {
    path: 'registro-actividad',
    component: RegistroActividadComponent,
  },
  {
    path: 'registrar-objetos',
    component: RegistraObjetosComponent,
  },
  {
    path: 'ia',
    component: IaComponent,
  },
  {
    path: 'padre',
    component: PadreObjetosComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './contents/menu/menu.component';
import { LoginComponent } from './contents/login/login.component';
import { EstadisticasComponent } from './contents/estadisticas/estadisticas.component';
import { ContactosComponent } from './contents/contactos/contactos.component';
import { ObjetosEncontradosComponent } from './contents/objetos-encontrados/objetos-encontrados.component';
import { RegistraObjetosComponent } from './contents/registra-objetos/registra-objetos.component';
import { ObjetosExtraviadosComponent } from './contents/objetos-extraviados/objetos-extraviados.component';
import { RegistroActividadComponent } from './contents/registro-actividad/registro-actividad.component';
import { IaComponent } from './contents/ia/ia.component';
import { environment } from 'src/environments/environments';
import { HttpClientModule } from '@angular/common/http';
import { PadreObjetosComponent } from './contents/padre-objetos/padre-objetos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    EstadisticasComponent,
    ContactosComponent,
    ObjetosEncontradosComponent,
    RegistraObjetosComponent,
    ObjetosExtraviadosComponent,
    RegistroActividadComponent,
    IaComponent,
    PadreObjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: SpinnerInterceptor,
    //   multi: true,
    // },
    {
      provide: 'APP_RUTA_BACKEND',
      useValue: environment.rutaApiBackend,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

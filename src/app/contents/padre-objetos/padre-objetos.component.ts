import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-objetos',
  templateUrl: './padre-objetos.component.html',
  styleUrls: ['./padre-objetos.component.scss']
})
export class PadreObjetosComponent {
  title = 'app-objetos';

  isNavbarCollapsed = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}

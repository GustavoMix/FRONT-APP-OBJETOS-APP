import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  
}

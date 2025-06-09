import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drawerOpened = false;

  menuItems = [
    { text: 'Home', path: '/home' },
    { text: 'Informações', path: '/informacoes' }
  ];

  menuButtonOptions = {
    icon: 'menu',
    onClick: () => {
      this.drawerOpened = !this.drawerOpened;
    }
  };

  constructor(private router: Router) {}

  onMenuItemClick(item: any) {
    this.router.navigate([item.path]);
    this.drawerOpened = false;  // fecha o menu ao clicar
  }

  onDrawerOptionChanged(e: any) {
    if (e.name === 'opened') {
      this.drawerOpened = e.value;
    }
  }
}

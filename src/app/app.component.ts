import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title="Notizie 24";
  isSidenavOpen = false;

  toggleSidenav() {
    console.log("evento ricevuto in appcomponente")
    this.isSidenavOpen = !this.isSidenavOpen; 
  }

}

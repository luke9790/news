import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;  // Riferimento al MatSidenav

  // Metodo per aprire o chiudere il sidenav
  toggle() {
    this.sidenav.toggle();
  }

  logout(){

  }
}

import { Component, ViewChild, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // Metodo che viene chiamato dal `HeaderComponent` per aprire/chiudere il sidenav
  @Input() toggleSidenav!: EventEmitter<void>;

  ngOnInit() {
    this.toggleSidenav.subscribe(() => this.sidenav.toggle());
  }
}

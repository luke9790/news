import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  logoSrc = "../../assets/ULTIME.png";
  menuItems = [
    { label: 'News', route: '/home' },
    { label: 'Economia', route: '/economia' },
    { label: 'Politica', route: '/politica' },
    { label: 'Sport', route: '/sport' },
    { label: 'Intrattenimento', route: '/intrattenimento' },
    { label: 'Scienza', route: '/scienza' },
    { label: 'Cultura', route: '/cultura' },
    { label: 'Salute', route: '/salute' },
  ];

  constructor(private router: Router) {}

  toggle() {
    this.toggleSidenav.emit();
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  onSectionClick(route: string) {
    this.router.navigate([route]);
  }
}

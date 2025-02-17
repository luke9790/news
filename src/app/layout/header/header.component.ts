import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidenavOpen = false;
  logoSrc = "../../assets/ULTIME.png";
  menuItems = [
    { label: 'News', route: '/home' },
    { label: 'Economy', route: '/economy' },
    { label: 'Technology', route: '/technology' },
    { label: 'Sports', route: '/sports' },
    { label: 'Entertainment', route: '/entertainment' },
    { label: 'Science', route: '/science' },
    { label: 'Health', route: '/health' },
  ];

  constructor(private router: Router) {}

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    console.log(this.sidenavOpen);
  }

  isActive(link: string): boolean {
    return this.router.url === link;
  }

  onSectionClick(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    // Logica per il logout
  }
}

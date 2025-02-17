import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  logoSrc = "../../assets/ULTIME.png";
  menuItems = [
    { label: 'News', route: '/home' },
    { label: 'Economy', route: '/economy' },
    { label: 'Politics', route: '/politics' },
    { label: 'Sports', route: '/sports' },
    { label: 'Entertainment', route: '/entertainment' },
    { label: 'Science', route: '/science' },
    { label: 'Culture', route: '/culture' },
    { label: 'Health', route: '/health' },
  ];

  constructor(private router: Router) {}

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

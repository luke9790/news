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
    { label: 'News', route: 'news' },
    { label: 'Economy', route: 'economy' },
    { label: 'Technology', route: 'technology' },
    { label: 'Sports', route: 'sports' },
    { label: 'Entertainment', route: 'entertainment' },
    { label: 'Science', route: 'science' },
    { label: 'Health', route: 'health' },
  ];
  

  constructor(private router: Router) {}

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
    console.log(this.sidenavOpen);
  }

  isActive(section: string): boolean {
    const segments = this.router.url.split('/');
    return segments[1] === 'home' && segments[2] === section;
  }
  

  onSectionClick(section: string) {
    this.router.navigate(['/home', section]);
  }
  
  

  logout() {
    // Logica per il logout
  }
}

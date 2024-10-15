import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa i moduli di Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Importa i tuoi componenti qui (ad esempio, HomeComponent)
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

// Definisci le rotte
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'news/:category', component: NewsCategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Rotta di default
  { path: '**', redirectTo: '/home' }  // Rotta wildcard per gestire percorsi non validi
];

@NgModule({
  declarations: [
    AppComponent,   // Dichiara qui i componenti
    HomeComponent,
    ProfileComponent,
    NewsCategoryComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // Necessario per le animazioni Angular Material
    RouterModule.forRoot(routes),  // Configurazione delle rotte
    MatToolbarModule,  // Modulo per la toolbar
    MatSidenavModule,  // Modulo per il sidenav
    MatIconModule,     // Modulo per le icone
    MatListModule      // Modulo per le liste del menu laterale
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

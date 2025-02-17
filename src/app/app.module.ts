import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Miei
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EconomyComponent } from './components/economy/economy.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'economy', component: EconomyComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'health', component: HealthComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LayoutComponent,
    HeaderComponent,
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

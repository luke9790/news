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
import { PoliticsComponent } from './components/politics/politics.component';
import { SportsComponent } from './components/sports/sports.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ScienceComponent } from './components/science/science.component';
import { CultureComponent } from './components/culture/culture.component';
import { HealthComponent } from './components/health/health.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'economy', component: EconomyComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'health', component: HealthComponent},
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

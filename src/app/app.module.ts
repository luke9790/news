import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Miei
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { EconomyComponent } from './economy/economy.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { CultureComponent } from './culture/culture.component';
import { HealthComponent } from './health/health.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'economia', component: EconomyComponent },
  { path: 'politica', component: PoliticsComponent },
  { path: 'sport', component: SportsComponent },
  { path: 'intrattenimento', component: EntertainmentComponent },
  { path: 'scienza', component: ScienceComponent },
  { path: 'cultura', component: CultureComponent },
  { path: 'salute', component: HealthComponent},
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,  
    MatIconModule,
    MatListModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

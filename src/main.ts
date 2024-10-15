import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Facciamo il bootstrap del modulo

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

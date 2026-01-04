import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';

import { providePrimeNG } from 'primeng/config';
import lara from '@primeuix/themes/lara'; // you can change lara to another theme

import { MessageService } from 'primeng/api';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: lara
      }
    }),
    MessageService
  ]
});

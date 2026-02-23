import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

const MyPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#e6eef5',
      100: '#ccdde8',
      200: '#99bbd1',
      300: '#6699ba',
      400: '#3377a3',
      500: '#06558c',
      600: '#06284f',
      700: '#051f3d',
      800: '#04162b',
      900: '#030d19',
      950: '#01060c'
    },
    surface: {
      0: '#fefefe',
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    },
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),

    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: 'none'
        }
      }
    })
  ]
};

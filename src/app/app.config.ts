import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"nopyy-20d73","appId":"1:927649138124:web:d2372544b6d80fbd8f8969","storageBucket":"nopyy-20d73.firebasestorage.app","apiKey":"AIzaSyDLXXw44C9WLtsVMLxIOXU1r7Ss8qIn-HQ","authDomain":"nopyy-20d73.firebaseapp.com","messagingSenderId":"927649138124"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};

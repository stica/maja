import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv8a8bOF0zqdjMNXEANBSpJ_TSbfp_JAY",
  authDomain: "majatica-web-site.firebaseapp.com",
  projectId: "majatica-web-site",
  storageBucket: "majatica-web-site.appspot.com",
  messagingSenderId: "181776368590",
  appId: "1:181776368590:web:fef1744ee4b8ac9cbae19f",
  measurementId: "G-RN2F5MG6FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
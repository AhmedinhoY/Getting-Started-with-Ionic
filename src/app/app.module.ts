import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: 'AIzaSyA592THa7RAU6b8P9eU71E4527l87PUhcg',
  authDomain: 'itcs444-5cf7c.firebaseapp.com',
  projectId: 'itcs444-5cf7c',
  storageBucket: 'itcs444-5cf7c.appspot.com',
  messagingSenderId: '558799259597',
  appId: '1:558799259597:web:d33449da65c506be3ee684',
  measurementId: 'G-D6GJX5HRYZ',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(), // Add this line
    // initialize angularfire with credentials from the dashboard
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Import the AngularFireDatabaseModule to use database
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

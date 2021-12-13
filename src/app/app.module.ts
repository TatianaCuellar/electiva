import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

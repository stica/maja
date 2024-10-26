import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularCountriesFlagsModule } from 'angular-countries-flags'
import { AppRoutingModule } from './app-routing.module';
import { InitialComponent } from './modules/initial/initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AngularCountriesFlagsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

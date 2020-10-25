import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material';
import { CarroselComponent } from './pages/carrosel/carrosel.component';
import { MapViewComponent } from './map-view/map-view.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarroselComponent,
    MapViewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    //MAT IMPORT
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

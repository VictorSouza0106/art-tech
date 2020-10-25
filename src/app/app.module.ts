import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material';
import { CarroselComponent } from './pages/carrosel/carrosel.component';
import { CardComponent } from './pages/card/card.component';
import { MapViewComponent } from './pages/map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapFooterComponent } from './pages/map-footer/map-footer.component';
import { RoutesPagesComponent } from './pages/routes-pages/routes-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarroselComponent,
    MapViewComponent,
    CardComponent,
    MapFooterComponent,
    RoutesPagesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule,


    //MAT IMPORT
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

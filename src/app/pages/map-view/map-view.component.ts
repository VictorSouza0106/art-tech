import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { latLng, MapOptions, tileLayer,Map, Polyline } from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit,AfterViewInit {

  map:Map;

  mapOptions: MapOptions;


  constructor() { }

  ngOnInit() {
    this.initializeMapOptions();
    
  }

  ngAfterViewInit(){
    this.createRoute();
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-23.112450, -47.216160),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  createRoute(){

    let tuple:[number,number] = [-22.90556,  -47.06083];
    let tuple2:[number,number] = [-23.09028,  -47.21806];

    let latLgnPoints = [tuple,tuple2];
    
    let polyline = new Polyline(latLgnPoints,{color:'red'}).addTo(this.map);

  }

}

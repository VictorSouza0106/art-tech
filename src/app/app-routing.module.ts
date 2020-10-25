import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapViewComponent } from './pages/map-view/map-view.component';
import { RoutesPagesComponent } from './pages/routes-pages/routes-pages.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'map',
    component:MapViewComponent
  },
  {
    path:'routes',
    component:RoutesPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

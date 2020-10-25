import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'map',
    component:MapViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

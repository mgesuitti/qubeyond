import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';
import { PlanetRoutingModule } from './planet-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PlanetComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
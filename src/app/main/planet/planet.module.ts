import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet.component';
import { PlanetRoutingModule } from './planet-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    PlanetComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
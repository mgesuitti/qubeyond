import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';
import { AppCommonModule } from 'src/app/app-common/app-common.module';

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    AppCommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
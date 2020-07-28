import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species.component';
import { SpeciesRoutingModule } from './species-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
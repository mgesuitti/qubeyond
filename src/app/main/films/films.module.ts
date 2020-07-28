import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
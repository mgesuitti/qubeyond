import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleImageComponent } from './circle-image/circle-image.component';
import { MaterialSharedModule } from './material/material.module';

@NgModule({
  declarations: [
    CircleImageComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports: [
    CircleImageComponent
  ]
})
export class SharedModule { }

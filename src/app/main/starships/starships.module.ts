import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { StarshipsRoutingModule } from './starships-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    StarshipsRoutingModule
  ]
})
export class StarshipsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
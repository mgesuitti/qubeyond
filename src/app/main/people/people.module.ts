import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    AppCommonModule,
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
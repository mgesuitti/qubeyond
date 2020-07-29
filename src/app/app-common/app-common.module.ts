import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from 'src/app/shared/material/material.module';
import { ModalPlanetComponent } from './modal-planet/modal-planet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ModalPlanetComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    SharedModule
  ],
  exports: [
    ModalPlanetComponent
  ],
  entryComponents: [
    ModalPlanetComponent
  ]
})
export class AppCommonModule { }

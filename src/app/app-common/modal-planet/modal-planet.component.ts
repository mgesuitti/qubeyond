import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanetDTO } from 'src/app/ModelDTO/planet.DTO';
import { PeopleServiceBackend } from 'src/app/ServiceBackend/people.ServiceBackend';
import { PeopleDTO } from 'src/app/ModelDTO/people.DTO';

export interface ModalPlanetData { planet: PlanetDTO; }

@Component({
  selector: 'app-modal-planet',
  templateUrl: './modal-planet.component.html',
  styleUrls: ['./modal-planet.component.scss']
})
export class ModalPlanetComponent {

  public planet: PlanetDTO;

  constructor(public dialogRef: MatDialogRef<ModalPlanetComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: ModalPlanetData,
              private peopleServiceBackend: PeopleServiceBackend) {
    this.planet = this.data.planet;
  }

  ngOnInit() {
    this.planet.residents.forEach(resident => {
      this.peopleServiceBackend.fillData(resident);
    });
  }

  public imageUrl(people: PeopleDTO): string {
    return 'assets/img/people/' + people.name + '.jpg';
  }

  public close() {
    this.dialogRef.close();
  }
}

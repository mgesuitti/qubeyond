import { Component, OnInit } from '@angular/core';
import { PlanetServiceBackend } from 'src/app/ServiceBackend/planet.ServiceBackend';
import { PlanetDTO } from 'src/app/ModelDTO/planet.DTO';
import { MatDialog } from '@angular/material/dialog';
import { ModalPlanetComponent } from 'src/app/app-common/modal-planet/modal-planet.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public data: Array<PlanetDTO>;

  constructor(private planetServiceBackend: PlanetServiceBackend
    , public dialog: MatDialog) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.planetServiceBackend.getPlanets().then(data => {
      this.data = data;
   });
  }

  public openDetail(planet: PlanetDTO) {
    this.dialog.open(ModalPlanetComponent, {
      data: { planet: planet },
      width: '500px',
      disableClose: false
    });
  }

  public next() {
    this.planetServiceBackend.getPlanets(true).then(data => {
      this.data = this.data.concat(data);
   });
  }
}

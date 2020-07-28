import { Component, OnInit } from '@angular/core';
import { PlanetServiceBackend } from 'src/app/ServiceBackend/planet.ServiceBackend';
import { PlanetDTO } from 'src/app/ModelDTO/planet.DTO';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public data: Array<PlanetDTO>;

  constructor(private planetServiceBackend: PlanetServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.planetServiceBackend.getPlanets().then(data => {
      this.data = data;
   });
  }
}

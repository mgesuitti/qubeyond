import { Component, OnInit } from '@angular/core';
import { PeopleServiceBackend } from 'src/app/ServiceBackend/people.ServiceBackend';
import { PeopleDTO } from 'src/app/ModelDTO/people.DTO';
import { PlanetServiceBackend } from 'src/app/ServiceBackend/planet.ServiceBackend';
import { SpeciesServiceBackend } from 'src/app/ServiceBackend/species.ServiceBackend';
import { StarshipServiceBackend } from 'src/app/ServiceBackend/starship.ServiceBackend';
import { VehicleServiceBackend } from 'src/app/ServiceBackend/vehicle.ServiceBackend';
import { FilmServiceBackend } from 'src/app/ServiceBackend/film.ServiceBackend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public numbersMap: {name: string; value: number} [];

  colorScheme = {
    domain: ['#83c1fa', '#8ae566', '#ffeb66', '#b29efa', '#b566b3', '#ff667c', '#ffc166','8ae566']
  };

  constructor(private peopleServiceBackend: PeopleServiceBackend
    , private planetServiceBackend: PlanetServiceBackend
    , private speciesServiceBackend: SpeciesServiceBackend
    , private starshipBackend: StarshipServiceBackend
    , private vehicleServiceBackend: VehicleServiceBackend
    , private filmServiceBackend: FilmServiceBackend
    , private router: Router) { 
    this.numbersMap = new Array();
  }

  ngOnInit() {
    this.fillData();
  }

  private async fillData() {
    let people = await this.peopleServiceBackend.getPeopleCount();
    this.numbersMap.push({name: "People", value: people});

    let planets = await this.planetServiceBackend.getPlanetsCount();
    this.numbersMap.push({name: "Planets", value: planets});

    let species = await this.speciesServiceBackend.getSpeciesCount();
    this.numbersMap.push({name: "Species", value: species});

    let starships = await this.starshipBackend.getStarshipsCount();
    this.numbersMap.push({name: "Starships", value: starships});

    let vehicles = await this.vehicleServiceBackend.getVehiclesCount();
    this.numbersMap.push({name: "Vehicles", value: vehicles});

    let films = await this.filmServiceBackend.getFilmsCount();
    this.numbersMap.push({name: "Films", value: films});

    this.numbersMap = [...this.numbersMap];
  }

  public onSelectNumber(event) {
    this.router.navigate(['./' + event.name.toLowerCase()]);
  }
}

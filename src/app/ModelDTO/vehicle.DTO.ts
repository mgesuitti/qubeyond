import { IEntityDTO } from './entity.DTO';
import { FilmDTO } from './film.DTO';
import { PeopleDTO } from './people.DTO';

export class VehicleDTO implements IEntityDTO {

  name: string = '';
  model: string = ''; // The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
  vehicle_class: string = ''; // The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
  manufacturer: string = ''; // The manufacturer of this vehicle. Comma separated if more than one.
  length: number = 0; // The length of this vehicle in meters.
  cost_in_credits: number = 0; // The cost of this vehicle new, in Galactic Credits.
  crew: number = 0; // The number of personnel needed to run or pilot this vehicle.
  passengers: string = ''; // The number of non-essential people this vehicle can transport.
  max_atmosphering_speed: number = 0; // The maximum speed of this vehicle in the atmosphere.
  cargo_capacity: number = 0; // The maximum number of kilograms that this vehicle can transport.
  consumables: string = ''; // The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
  films: Array<FilmDTO>; // An array of Film URL Resources that this vehicle has appeared in.
  pilots: Array<PeopleDTO>; // An array of People URL Resources that this vehicle has been piloted by.
  url: string = ''; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.

  constructor() {
  }

  public PrepareDTO(jsonObj: any): void {
     if (jsonObj == null) return;
     if (jsonObj['name'] != null) this.name = jsonObj['name'];

     if (jsonObj['url'] != null) this.url = jsonObj['url'];
     if (jsonObj['created'] != null) this.created = new Date(jsonObj['created']);
     if (jsonObj['edited'] != null) this.edited = new Date(jsonObj['edited']);
  }
}
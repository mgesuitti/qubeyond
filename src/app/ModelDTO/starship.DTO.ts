import { IEntityDTO } from './entity.DTO';
import { FilmDTO } from './film.DTO';
import { PeopleDTO } from './people.DTO';

export class StarshipDTO implements IEntityDTO {

  name: string = '';
  model: string = ''; // The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
  starship_class: string = ''; // The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
  manufacturer: string = ''; // The manufacturer of this starship. Comma separated if more than one.
  cost_in_credits: number = 0; // The cost of this starship new, in galactic credits.
  length: number = 0; // The length of this starship in meters.
  crew: number = 0; // The number of personnel needed to run or pilot this starship.
  passengers: string = ''; // The number of non-essential people this starship can transport.
  max_atmosphering_speed: string = ''; // The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
  hyperdrive_rating: number = 0; // The class of this starships hyperdrive.
  MGLT: string = ''; // The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
  cargo_capacity: number = 0; // The maximum number of kilograms that this starship can transport.
  consumables: string = ''; // The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
  films: Array<FilmDTO>; // An array of Film URL Resources that this starship has appeared in.
  pilots: Array<PeopleDTO>; // An array of People URL Resources that this starship has been piloted by.
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
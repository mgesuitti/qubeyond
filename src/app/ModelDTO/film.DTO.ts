import { IEntityDTO } from './entity.DTO';
import { SpeciesDTO } from './species.DTO';
import { StarshipDTO } from './starship.DTO';
import { VehicleDTO } from './vehicle.DTO';
import { PeopleDTO } from './people.DTO';
import { PlanetDTO } from './planet.DTO';

export class FilmDTO implements IEntityDTO {

  title: string = '';
  episode_id: number = 0; // The episode number of this film.
  opening_crawl: string = ''; // The opening paragraphs at the beginning of this film.
  director: string = ''; // The name of the director of this film.
  producer: string = ''; // The name(s) of the producer(s) of this film. Comma separated.
  release_date: Date; // The ISO 8601 date format of film release at original creator country.
  species: Array<SpeciesDTO>; // An array of species resource URLs that are in this film.
  starships: Array<StarshipDTO>; // An array of starship resource URLs that are in this film.
  vehicles: Array<VehicleDTO>; // An array of vehicle resource URLs that are in this film.
  characters: Array<PeopleDTO>; // An array of people resource URLs that are in this film.
  planets: Array<PlanetDTO>; // An array of planet resource URLs that are in this film.
  url: string = ''; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.

  constructor() {
  }

  public PrepareDTO(jsonObj: any): void {
     if (jsonObj == null) return;
     if (jsonObj['title'] != null) this.title = jsonObj['title'];

     if (jsonObj['url'] != null) this.url = jsonObj['url'];
     if (jsonObj['created'] != null) this.created = new Date(jsonObj['created']);
     if (jsonObj['edited'] != null) this.edited = new Date(jsonObj['edited']);
  }
}
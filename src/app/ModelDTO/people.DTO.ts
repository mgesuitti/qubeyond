import { IEntityDTO } from './entity.DTO';
import { SpeciesDTO } from './species.DTO';
import { FilmDTO } from './film.DTO';
import { StarshipDTO } from './starship.DTO';
import { VehicleDTO } from './vehicle.DTO';

export class PeopleDTO implements IEntityDTO {

  name: string = '';
  birth_year: string = ''; // The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
  eye_color: string = ''; // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
  gender: string = ''; // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
  hair_color: string = ''; // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
  height: number = 0; // The height of the person in centimeters.
  mass: number = 0; // The mass of the person in kilograms.
  skin_color: string = ''; // The skin color of this person.
  homeworld: string = ''; // The URL of a planet resource, a planet that this person was born on or inhabits.
  films: Array<FilmDTO>; // An array of film resource URLs that this person has been in.
  species: Array<SpeciesDTO>; // An array of species resource URLs that this person belongs to.
  starships: Array<StarshipDTO>; // An array of starship resource URLs that this person has piloted.
  vehicles: Array<VehicleDTO>; // An array of vehicle resource URLs that this person has piloted.
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
import { IEntityDTO } from './entity.DTO';
import { FilmDTO } from './film.DTO';
import { PeopleDTO } from './people.DTO';

export class SpeciesDTO implements IEntityDTO {

  name: string = '';
  classification: string = ''; // The classification of this species, such as "mammal" or "reptile".
  designation: string = ''; // The designation of this species, such as "sentient".
  average_height: number = 0; // The average height of this species in centimeters.
  average_lifespan: number = 0; // The average lifespan of this species in years.
  eye_colors: string = ''; // A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
  hair_colors: string = ''; // A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
  skin_colors: string = ''; // A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
  language: string = ''; // The language commonly spoken by this species.
  homeworld: string = ''; // The URL of a planet resource, a planet that this species originates from.
  people: Array<PeopleDTO>; // An array of People URL Resources that are a part of this species.
  films: Array<FilmDTO>; // An array of Film URL Resources that this species has appeared in.
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
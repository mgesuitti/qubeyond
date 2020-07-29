import { IEntityDTO } from './entity.DTO';
import { PeopleDTO } from './people.DTO';
import { FilmDTO } from './film.DTO';

export class PlanetDTO implements IEntityDTO {

  name: string = ''; // The name of this planet.
  diameter: number = 0; // The diameter of this planet in kilometers.
  rotation_period: number = 0; // The number of standard hours it takes for this planet to complete a single rotation on its axis.
  orbital_period: number = 0; // The number of standard days it takes for this planet to complete a single orbit of its local star.
  gravity: number = 0; // A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  population: number = 0; // The average population of sentient beings inhabiting this planet.
  climate: string = ''; // The climate of this planet. Comma separated if diverse.
  terrain: string = ''; // The terrain of this planet. Comma separated if diverse.
  surface_water: number = 0; // The percentage of the planet surface that is naturally occurring water or bodies of water.
  residents: Array<PeopleDTO>; // An array of People URL Resources that live on this planet.
  films: Array<FilmDTO>; // An array of Film URL Resources that this planet has appeared in.
  url: string = ''; // the hypermedia URL of this resource.
  created: Date; // the ISO 8601 date format of the time that this resource was created.
  edited: Date; // the ISO 8601 date format of the time that this resource was edited.

  constructor() {
    this.residents = new Array<PeopleDTO>();
  }

  public PrepareDTO(jsonObj: any): void {
     if (jsonObj == null) return;
     if (jsonObj['name'] != null) this.name = jsonObj['name'];
     if (jsonObj['population'] != null) this.population = jsonObj['population'];
     if (jsonObj['residents'] != null) for (const item of jsonObj['residents']) { const itemDTO = new PeopleDTO(); itemDTO.url = item ; this.residents.push(itemDTO); }

     if (jsonObj['url'] != null) this.url = jsonObj['url'];
     if (jsonObj['created'] != null) this.created = new Date(jsonObj['created']);
     if (jsonObj['edited'] != null) this.edited = new Date(jsonObj['edited']);
  }
}
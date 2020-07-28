import { IEntityDTO } from './entity.DTO';

export class FilmDTO implements IEntityDTO {

  title: string = '';

  constructor() {
  }

  public PrepareDTO(jsonObj: any): void {
     if (jsonObj == null) return;
     if (jsonObj['title'] != null) this.title = jsonObj['title'];
  }
}
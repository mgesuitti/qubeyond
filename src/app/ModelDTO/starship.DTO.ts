import { IEntityDTO } from './entity.DTO';

export class StarshipDTO implements IEntityDTO {

  name: string = '';

  constructor() {
  }

  public PrepareDTO(jsonObj: any): void {
     if (jsonObj == null) return;
     if (jsonObj['name'] != null) this.name = jsonObj['name'];
  }
}
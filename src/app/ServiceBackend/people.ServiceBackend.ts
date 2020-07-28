
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { PlanetDTO } from '../ModelDTO/planet.DTO';

@Injectable({
   providedIn: 'root'
})
export class PeopleServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getPeople(): Promise<Array<PlanetDTO>> {
      const res = await this.http.get(Constants.apiURL + '/people/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<PlanetDTO>();
      for (const item of resJson) {
         const itemDTO = new PlanetDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getPeopleCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/planets/').toPromise();
      return res['count'];
   }
}
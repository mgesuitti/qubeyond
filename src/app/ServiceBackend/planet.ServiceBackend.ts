import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { PlanetDTO } from '../ModelDTO/planet.DTO';

@Injectable({
   providedIn: 'root'
})
export class PlanetServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getPlanets(): Promise<Array<PlanetDTO>> {
      const res = await this.http.get(Constants.apiURL + '/planets/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<PlanetDTO>();
      for (const item of resJson) {
         const itemDTO = new PlanetDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getPlanetsCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/people/').toPromise();
      return res['count'];
   }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { PlanetDTO } from '../ModelDTO/planet.DTO';

@Injectable({
   providedIn: 'root'
})
export class PlanetServiceBackend {

   private next: string;

   constructor(protected http: HttpClient) { }

   public async getPlanets(next: boolean = false): Promise<Array<PlanetDTO>> {
      let url = Constants.apiURL + '/planets/';
      
      if (next) {
         if (!this.next) {
            return new Array<PlanetDTO>();
         } else {
            url = this.next;
         }
      } 

      const res = await this.http.get(url).toPromise();
      const resJson = res['results'];
      this.next = res['next'];
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
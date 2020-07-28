import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { StarshipDTO } from '../ModelDTO/starship.DTO';

@Injectable({
   providedIn: 'root'
})
export class StarshipServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getStarships(): Promise<Array<StarshipDTO>> {
      const res = await this.http.get(Constants.apiURL + '/starships/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<StarshipDTO>();
      for (const item of resJson) {
         const itemDTO = new StarshipDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getStarshipsCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/starships/').toPromise();
      return res['count'];
   }
}
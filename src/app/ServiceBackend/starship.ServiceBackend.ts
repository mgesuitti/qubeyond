import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { StarshipDTO } from '../ModelDTO/starship.DTO';

@Injectable({
   providedIn: 'root'
})
export class StarshipServiceBackend {

   private next: string;

   constructor(protected http: HttpClient) { }

   public async getStarships(next: boolean = false): Promise<Array<StarshipDTO>> {
      let url = Constants.apiURL + '/starships/';
      
      if (next) {
         if (!this.next) {
            return new Array<StarshipDTO>();
         } else {
            url = this.next;
         }
      } 

      const res = await this.http.get(url).toPromise();
      const resJson = res['results'];
      this.next = res['next'];
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
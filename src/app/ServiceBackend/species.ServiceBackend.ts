import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { SpeciesDTO } from '../ModelDTO/species.DTO';

@Injectable({
   providedIn: 'root'
})
export class SpeciesServiceBackend {

   private next: string;

   constructor(protected http: HttpClient) { }

   public async getSpecies(next: boolean = false): Promise<Array<SpeciesDTO>> {
      let url = Constants.apiURL + '/species/';
      
      if (next) {
         if (!this.next) {
            return new Array<SpeciesDTO>();
         } else {
            url = this.next;
         }
      } 

      const res = await this.http.get(url).toPromise();
      const resJson = res['results'];
      this.next = res['next'];
      const resDTO = new Array<SpeciesDTO>();
      for (const item of resJson) {
         const itemDTO = new SpeciesDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getSpeciesCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/species/').toPromise();
      return res['count'];
   }
}
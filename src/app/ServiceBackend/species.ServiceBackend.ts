import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { SpeciesDTO } from '../ModelDTO/species.DTO';

@Injectable({
   providedIn: 'root'
})
export class SpeciesServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getSpecies(): Promise<Array<SpeciesDTO>> {
      const res = await this.http.get(Constants.apiURL + '/species/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<SpeciesDTO>();
      for (const item of resJson) {
         const itemDTO = new SpeciesDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }
}
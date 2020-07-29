
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { PeopleDTO } from '../ModelDTO/people.DTO';

@Injectable({
   providedIn: 'root'
})
export class PeopleServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getPeople(): Promise<Array<PeopleDTO>> {
      const res = await this.http.get(Constants.apiURL + '/people/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<PeopleDTO>();
      for (const item of resJson) {
         const itemDTO = new PeopleDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async fillData(peopleDTO: PeopleDTO): Promise<PeopleDTO> {
      const res = await this.http.get(peopleDTO.url).toPromise();
      if (res) {
         peopleDTO.PrepareDTO(res);
         return peopleDTO;
      } else {
         return null;
      }
   }

   public async getPeopleCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/planets/').toPromise();
      return res['count'];
   }
}
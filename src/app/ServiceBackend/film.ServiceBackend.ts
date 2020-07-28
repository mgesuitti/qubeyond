import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { FilmDTO } from '../ModelDTO/film.DTO';

@Injectable({
   providedIn: 'root'
})
export class FilmServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getFilms(): Promise<Array<FilmDTO>> {
      const res = await this.http.get(Constants.apiURL + '/films/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<FilmDTO>();
      for (const item of resJson) {
         const itemDTO = new FilmDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getFilmsCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/films/').toPromise();
      return res['count'];
   }
}
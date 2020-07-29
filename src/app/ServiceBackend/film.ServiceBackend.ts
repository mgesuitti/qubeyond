import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { FilmDTO } from '../ModelDTO/film.DTO';

@Injectable({
   providedIn: 'root'
})
export class FilmServiceBackend {

   private next: string;

   constructor(protected http: HttpClient) { }

   public async getFilms(next: boolean = false): Promise<Array<FilmDTO>> {
      let url = Constants.apiURL + '/films/';
      
      if (next) {
         if (!this.next) {
            return new Array<FilmDTO>();
         } else {
            url = this.next;
         }
      } 

      const res = await this.http.get(url).toPromise();
      const resJson = res['results'];
      this.next = res['next'];
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
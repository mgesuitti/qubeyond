import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { VehicleDTO } from '../ModelDTO/vehicle.DTO';

@Injectable({
   providedIn: 'root'
})
export class VehicleServiceBackend {

   private next: string;

   constructor(protected http: HttpClient) { }

   public async getVehicles(next: boolean = false): Promise<Array<VehicleDTO>> {
      let url = Constants.apiURL + '/vehicles/';
      
      if (next) {
         if (!this.next) {
            return new Array<VehicleDTO>();
         } else {
            url = this.next;
         }
      } 

      const res = await this.http.get(url).toPromise();
      const resJson = res['results'];
      this.next = res['next'];
      const resDTO = new Array<VehicleDTO>();
      for (const item of resJson) {
         const itemDTO = new VehicleDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }

   public async getVehiclesCount(): Promise<number> {
      const res = await this.http.get(Constants.apiURL + '/vehicles/').toPromise();
      return res['count'];
   }
}
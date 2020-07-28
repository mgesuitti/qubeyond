import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { VehicleDTO } from '../ModelDTO/vehicle.DTO';

@Injectable({
   providedIn: 'root'
})
export class VehicleServiceBackend {

   constructor(protected http: HttpClient) { }

   public async getVehicles(): Promise<Array<VehicleDTO>> {
      const res = await this.http.get(Constants.apiURL + '/vehicles/').toPromise();
      const resJson = res['results'];
      const resDTO = new Array<VehicleDTO>();
      for (const item of resJson) {
         const itemDTO = new VehicleDTO()
         itemDTO.PrepareDTO(item);
         resDTO.push(itemDTO);
      }
      return resDTO;
   }
}
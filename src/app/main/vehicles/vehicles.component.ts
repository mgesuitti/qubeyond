import { Component, OnInit } from '@angular/core';
import { VehicleServiceBackend } from 'src/app/ServiceBackend/vehicle.ServiceBackend';
import { VehicleDTO } from 'src/app/ModelDTO/vehicle.DTO';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  public data: Array<VehicleDTO>;

  constructor(private vehicleServiceBackend: VehicleServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.vehicleServiceBackend.getVehicles().then(data => {
      this.data = data;
   });
  }
}

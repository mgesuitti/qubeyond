import { Component, OnInit } from '@angular/core';
import { SpeciesServiceBackend } from 'src/app/ServiceBackend/species.ServiceBackend';
import { SpeciesDTO } from 'src/app/ModelDTO/species.DTO';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  public data: Array<SpeciesDTO>;

  constructor(private speciesServiceBackend: SpeciesServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.speciesServiceBackend.getSpecies().then(data => {
      this.data = data;
   });
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleServiceBackend } from 'src/app/ServiceBackend/people.ServiceBackend';
import { PeopleDTO } from 'src/app/ModelDTO/people.DTO';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  public data: Array<PeopleDTO>;

  constructor(private peopleServiceBackend: PeopleServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.peopleServiceBackend.getPeople().then(data => {
      this.data = data;
   });
  }
}

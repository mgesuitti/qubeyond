import { Component, OnInit } from '@angular/core';
import { PeopleServiceBackend } from 'src/app/ServiceBackend/people.ServiceBackend';
import { PeopleDTO } from 'src/app/ModelDTO/people.DTO';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public data: Array<PeopleDTO>;

  constructor(private peopleServiceBackend: PeopleServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.peopleServiceBackend.getPeople().then(data => {
      this.data = data;
   });
  }

  public next() {
    this.peopleServiceBackend.getPeople(true).then(data => {
      this.data = this.data.concat(data);
   });
  }

  public imageUrl(people: PeopleDTO): string {
    return 'assets/img/people/' + people.name + '.jpg';
  }
}

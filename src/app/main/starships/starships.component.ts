import { Component, OnInit } from '@angular/core';
import { StarshipServiceBackend } from 'src/app/ServiceBackend/starship.ServiceBackend';
import { StarshipDTO } from 'src/app/ModelDTO/starship.DTO';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  public data: Array<StarshipDTO>;

  constructor(private starshipsServiceBackend: StarshipServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.starshipsServiceBackend.getStarships().then(data => {
      this.data = data;
   });
  }

  public next() {
    this.starshipsServiceBackend.getStarships(true).then(data => {
      this.data = this.data.concat(data);
   });
  }
}

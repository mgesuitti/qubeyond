import { Component, OnInit } from '@angular/core';
import { FilmServiceBackend } from 'src/app/ServiceBackend/film.ServiceBackend';
import { FilmDTO } from 'src/app/ModelDTO/film.DTO';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public data: Array<FilmDTO>;

  constructor(private filmsServiceBackend: FilmServiceBackend) { 
    this.data = new Array();
  }

  ngOnInit() {
   this.filmsServiceBackend.getFilms().then(data => {
      this.data = data;
   });
  }
}

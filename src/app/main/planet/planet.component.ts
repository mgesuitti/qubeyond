import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  public data: Array<number>;

  constructor() { 
    this.data = new Array();
  }

  ngOnInit() {
    while(this.data.length < 10){
        var r = Math.floor(Math.random() * 100) + 1;
        if (this.data.indexOf(r) === -1) this.data.push(r);
    }
  }
}

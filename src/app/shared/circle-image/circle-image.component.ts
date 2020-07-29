import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-image',
  templateUrl: './circle-image.component.html',
  styleUrls: ['./circle-image.component.scss']
})
export class CircleImageComponent implements OnInit {

  @Input() imageSource: string;
  @Input() withBorder: boolean;
  @Input() width = 100;
  @Input() height = 100;
  @Input() center = false;
  constructor() { }

  ngOnInit() {
  }

  errorHandler(event) {
    event.target.src = "assets/img/people/empty.jpg";
 }

}

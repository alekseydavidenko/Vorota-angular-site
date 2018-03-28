import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {

  public innerHeight: String;
  public interval = 8000;
  public showIndicator = false;

  constructor() {
    this.innerHeight = window.innerHeight + 'px';

    const getWindow = () => {
      return window.innerHeight + 'px';
    };

    window.onresize = () => {
        this.innerHeight = getWindow();
        console.log(this.innerHeight);
    };
  }

  ngOnInit() {
  }

}

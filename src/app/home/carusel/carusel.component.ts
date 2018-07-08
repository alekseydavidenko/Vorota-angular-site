import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  forwardRef
} from '@angular/core';

import { CaruselService } from '../../shared/carusel/carusel.service';
import { Carusel } from '../../shared/carusel/carusel';

import { WOW } from '../../../../node_modules/wowjs/dist/wow';

// import { Router, NavigationEnd, Event } from '@angular/router';
// import { NgwWowService } from 'ngx-wow';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  public innerHeight: String;
  public interval = 8000;
  public showIndicator = false;

  public caruselSlides: Carusel[];

  public wow: WOW;
  // private wowSubscription: Subscription;

  constructor(
    @Inject(forwardRef(() => CaruselService))
    private caruselService: CaruselService,
  ) {
    this.innerHeight = window.innerHeight + 'px';

    const getWindow = () => {
      return window.innerHeight + 'px';
    };

    window.onresize = () => {
      this.innerHeight = getWindow();
    };
  }

  ngOnInit() {
    this.caruselService
      .gerCarusel()
      .then(result => (this.caruselSlides = result));
    console.log('init-component');
    this.wow = new WOW({
      live: false
    }).init();
  }
}

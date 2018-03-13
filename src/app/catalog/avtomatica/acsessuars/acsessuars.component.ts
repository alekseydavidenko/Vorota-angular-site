import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Product } from '../../../shared/automatica/product';

import { AutomaticaService } from '../../../shared/automatica/automatica.service';

@Component({
  selector: 'app-acsessuars',
  templateUrl: './acsessuars.component.html',
  styleUrls: ['./acsessuars.component.css']
})
export class AcsessuarsComponent implements OnInit {

  public acsessuars: Product[];

  constructor(
    @Inject(forwardRef(() => AutomaticaService))
    public automaticaService: AutomaticaService
  ) { }

  ngOnInit() {
    this.acsessuars = this.automaticaService.getProducts([
      'transmitter2Pro',
      'transmitter4Pro',
      'transmitter4',
      'carTransmitter',
      'transmitterPremium',
      'command',
      'dhre1',
      'repeater1',
      'smartcontrol2',
      'gsm2',
      'antenna',
      'keyswitch',
      'photosell',
      'photosellPro',
      'lampPro',
      'trafficlightLed',
      'sirena',
      'dhSensorKit',
      'optokit',
      'stop',
      'wdkit',
      'keypad',
      'keycode',
      'domo7',
      'radioparking',
      'dhLockKit',
      'estrike',
      'magLockKiit'
    ]);
  }
}

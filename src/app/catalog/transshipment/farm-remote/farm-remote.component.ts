import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';
import { Acsessuar } from '../../../shared/transshipment/acsessuar';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-farm-remote',
  templateUrl: './farm-remote.component.html',
  styleUrls: ['./farm-remote.component.css']
})
export class FarmRemoteComponent implements OnInit {

  public types: Color[];
  public colors: Color[];
  public acsessuars: Acsessuar[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => TransshipmentService))
    public transshipmentService: TransshipmentService
  ) {}

  ngOnInit() {
    this.types = this.transshipmentService.getType([
      'lenticular',
    ]);
    this.colors = this.transshipmentService.getColor([
      'black',
      'blue',
    ]);
    this.acsessuars = this.transshipmentService.getAcsessuars([
      'br250',
      'br450',
      'brc510',
      'brm600',
      'brsp1',
      'brsp2',
      'bs500',
      'bs800'
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

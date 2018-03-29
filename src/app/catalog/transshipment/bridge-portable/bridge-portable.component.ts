import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/transshipment/color';

import { TransshipmentService } from '../../../shared/transshipment/transshipment.service';

@Component({
  selector: 'app-bridge-portable',
  templateUrl: './bridge-portable.component.html',
  styleUrls: ['./bridge-portable.component.css']
})
export class BridgePortableComponent implements OnInit {

  public types: Color[];
  public colors: Color[];

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

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

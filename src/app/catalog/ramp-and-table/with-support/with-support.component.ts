import { Component, OnInit, Inject, forwardRef } from '@angular/core';

import { Size, Construction } from '../../../shared/catalog/idex';
import { CharacteristicSize, Constructions } from './characteristics';

import { Color } from '../../../shared/ramp-and-table/color';

import { RampAndTableService } from '../../../shared/ramp-and-table/ramp-and-table.service';

@Component({
  selector: 'app-with-support',
  templateUrl: './with-support.component.html',
  styleUrls: ['./with-support.component.css']
})
export class WithSupportComponent implements OnInit {

  public colors: Color[];

  public constructions: Construction[];
  public size: Size[];

  constructor(
    @Inject(forwardRef(() => RampAndTableService))
    public rampAndTableService: RampAndTableService
  ) {}

  ngOnInit() {
    this.colors = this.rampAndTableService.getColor([
      'black',
      'blue',
    ]);

    this.constructions = Constructions;
    this.size = CharacteristicSize;
  }

}

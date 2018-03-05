import { Component, OnInit } from '@angular/core';

import { Size, Construction, Specification } from '../../../../shared/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';
@Component({
  selector: 'app-se-1000pro',
  templateUrl: './se-1000pro.component.html',
  styleUrls: ['./se-1000pro.component.css']
})
export class Se1000proComponent implements OnInit {

  public constructions: Construction[];
  public specifications: Specification[];
  public specification = false;

  constructor() { }

  ngOnInit() {
    this.constructions = Constructions;
    this.specifications = CharacteristicTechnical;

    this.specificationShow();
  }

  specificationShow() {
    const _this = this;
    this.specifications.map(item => {
      if (item.note != null) {
        _this.specification = true;
        return;
      }
    });
  }

}

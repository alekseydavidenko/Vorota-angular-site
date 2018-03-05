import { Component, OnInit } from '@angular/core';

import { Construction, Specification } from '../../../../shared/idex';
import { Constructions, CharacteristicTechnical } from './characteristics';

@Component({
  selector: 'app-swing-5000pro',
  templateUrl: './swing-5000pro.component.html',
  styleUrls: ['./swing-5000pro.component.css']
})
export class Swing5000proComponent implements OnInit {

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

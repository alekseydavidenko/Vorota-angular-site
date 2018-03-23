import { Injectable } from '@angular/core';

import { Color } from './color';
import { Acsessuar } from './acsessuar';

@Injectable()
export class RampAndTableService {

  private colors = {
    black: new Color(
      '../../../assets/img/catalog/ramp-and-table/complectations/color-black.jpg',
      'Черный RAL 9005'
    ),
    blue: new Color(
      '../../../assets/img/catalog/ramp-and-table/complectations/color-blue.jpg',
      'Синий RAL 5005'
    ),
  };

  private acsessuars = {
    inclosure: new Acsessuar(
      '../../../assets/img/catalog/ramp-and-table/acsessuars/inclosure.jpg',
      'Ограждение',
      'для стола подъемного'
    ),
  };

  public getColor(index): Color[] {
    const obj: Color[] = [];

    index.forEach(element => {
      for (const item in this.colors) {
        if (element === item) {
          obj.push(this.colors[element]);
        }
      }
    });

    return obj;
  }

  public getAcsessuars(index): Acsessuar[] {
    const obj: Acsessuar[] = [];

    index.forEach(element => {
      for (const item in this.acsessuars) {
        if (element === item) {
          obj.push(this.acsessuars[element]);
        }
      }
    });

    return obj;
  }
}

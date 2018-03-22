import { Injectable } from '@angular/core';

import { Color } from './color';
import { Acsessuar } from './acsessuar';

@Injectable()
export class SpeedRollService {
  type = {
    notColor: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/type-not-color.jpg',
      'Каркас ворот без покраски из оцинкованной стали'
    ),
    typeSteel: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/type-steel.jpg',
      'Каркас ворот из нержавеющей стали ASIS 304'
    ),
  };

  color = {
    white: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-white.jpg',
      'RAL 9010 Белый'
    ),
    darckBlue: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-darck-blue.jpg',
      'RAL 5002 Синий'
    ),
    darckGreen: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-darck-green.jpg',
      'RAL 6026 Зеленый'
    ),
    silver: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-silver.jpg',
      'RAL 9006 Серебристый'
    ),
    yellow: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-yellow.jpg',
      'RAL 1003 Желтый'
    ),
    lightRed: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-light-red.jpg',
      'RAL 3002 Красный'
    ),
    orange: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-orange.jpg',
      'RAL 2004 Оранжевый'
    ),
    blue: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-blue.jpg',
      'RAL 5005 Синий'
    ),
    green: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-green.jpg',
      'RAL 6005 Зеленый'
    ),
    red: new Color(
      '../../../assets/img/catalog/speed-roll/complectations/color-red.jpg',
      'RAL 3000 Красный'
    ),
  };

  acsessuars = {
    rackSteel: new Acsessuar(
      '../../../assets/img/catalog/speed-roll/acsessuars/rack-steel.jpg',
      'Стойки и короба',
      'из нержавеющей стали AISI304, AISI316'
    ),
    blockSteel: new Acsessuar(
      '../../../assets/img/catalog/speed-roll/acsessuars/block-steel.jpg',
      'Корпус блока управления',
      'из нержавеющей стали AISI304'
    ),
    heater: new Acsessuar(
      '../../../assets/img/catalog/speed-roll/acsessuars/heater.jpg',
      'Подогрев',
      'привода и стоек'
    ),
    sensor: new Acsessuar(
      '../../../assets/img/catalog/speed-roll/acsessuars/sensor.jpg',
      'Сенсоры безопасности',
      'при закрытии, в случае прикосновения чувствительной нижней кромки к препятствию,'
      + 'с сенсора по радиоканалу передается сигнал в блок управления на открытие ворот;'
      + 'в случае отключения электричества ворота открываются автоматически с помощью противовеса'
    ),
    clampingSteel: new Acsessuar(
      '../../../assets/img/catalog/speed-roll/acsessuars/clamping-steel.jpg',
      'Крепление',
      'выполнено из нержавеющей стали'
    ),
  };

  getType(index): Color[] {
    const obj: Color[] = [];

    index.forEach(element => {
      for (const item in this.type) {
        if (element === item) {
          obj.push(this.type[element]);
        }
      }
    });

    return obj;
  }
  getColor(index): Color[] {
    const obj: Color[] = [];

    index.forEach(element => {
      for (const item in this.color) {
        if (element === item) {
          obj.push(this.color[element]);
        }
      }
    });

    return obj;
  }
  getAcsessuars(index): Acsessuar[] {
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

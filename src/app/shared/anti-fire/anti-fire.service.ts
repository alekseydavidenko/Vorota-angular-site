import { Injectable } from '@angular/core';

import { TypePanel } from './type-panel';
import { ColorPanelRal } from './color-panel-ral';
import { AcsessuarAntiFire } from './acsessuar-anti-fire';

@Injectable()
export class AntiFireService {
  typePanel = {
    stucco: new TypePanel('../../../assets/img/catalog/anti-fire/complectation/type-stucco.jpg', 'Stucco'),
  };
  colorPanelRal = {
    whiteStandart: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-white-standart.jpg',
      'RAL 9002 белый (стандартный)'
    ),
    white: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-white.jpg',
      'RAL 9003 Белый'
    ),
    brown: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-brown.jpg',
      'RAL 8014 Коричневый'
    ),
    blue: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-blue.jpg',
      'RAL 5005 Синий'
    ),
    green: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-green.jpg',
      'RAL 6005 Зеленый'
    ),
    silver: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-silver.jpg',
      'RAL 9006 Серебро'
    ),
    red: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-red.jpg',
      'RAL 3000 Красный'
    ),
    grayStandart: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-gray.jpg',
      'RAL 7004 Серый (стандартный)'
    ),
    gray: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-gray.jpg',
      'RAL 7004 Серый'
    ),
    anthracite: new ColorPanelRal(
      '../../../assets/img/catalog//anti-fire/complectation/color-anthracite.jpg',
      'RAL 7016 Антрацыт'
    ),
    ivory: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-ivory.jpg',
      'RAL 1014 Бежевый'
    ),
    wineRred: new ColorPanelRal(
      '../../../assets/img/catalog/anti-fire/complectation/color-wine-red.jpg',
      'RAL 7016 Бордо'
    ),
  };
  acsessuars = {
    dhre: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-dhre-2.jpg',
      'Приемник внешний',
      'Двухканальный 433 МГц (DHRE-2).'
    ),
    photoCell: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-photo-cell.jpg',
      'Фотоэлементы безопасности',
      'предназначены для обнаружения людей, животных и посторонних предметов в'
      + ' проеме ворот при движении полотна для исключения травматизма.'
    ),
    lamp: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-lamp.jpg',
      'Сигнальная лампа',
      'сигнализирует о движении ворот в течение всего цикла открытия и закрытия.'
    ),
    pult: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-pult.jpg',
      'Дистанционное управление',
      'современный дизайн, небольшие размеры пультов.'
    ),
    keySwich: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-key-swich.jpg',
      'Ключ-кнопка',
      'защита ключом, компактный корпус, надежный механизм, механическая блокировка.'
    ),
    electromagnet: new AcsessuarAntiFire(
      '../../../assets/img/catalog/anti-fire/complectation/acsessuar-electromagnet.jpg',
      'Электромагнит',
      'устройство для запирания дверей, принцип работы которого основан на магнитном взаимодействии.'
    ),
  };

  getTypesPanels(index): TypePanel[] {
    const obj: TypePanel[] = [];

    index.forEach(element => {
      for (const item in this.typePanel) {
        if (element === item) {
          obj.push(this.typePanel[element]);
        }
      }
    });

    return obj;
  }
  getColorsPanelsRal(index): ColorPanelRal[] {
    const obj: ColorPanelRal[] = [];

    index.forEach(element => {
      for (const item in this.colorPanelRal) {
        if (element === item) {
          obj.push(this.colorPanelRal[element]);
        }
      }
    });

    return obj;
  }
  getAcsessuarsAntiFire(index): AcsessuarAntiFire[] {
    const obj: AcsessuarAntiFire[] = [];

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

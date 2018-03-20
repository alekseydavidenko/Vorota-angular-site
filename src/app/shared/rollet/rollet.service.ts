import { Injectable } from '@angular/core';

import { ViewLamel } from './view-lamel';
import { ColorLamel } from './color-lamel';
import { AcsessuarRollet } from './acsessuar-rollet';

@Injectable()
export class RolletService {
  viewLamels = {
    rh45: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rh-45.jpg', 'RH45'),
    rh58: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rh-45.jpg', 'RH58'),
    rh77: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rh-77.jpg', 'RH77'),
    rhe45: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-45.jpg', 'RHE45'),
    rhe58: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-45.jpg', 'RHE58'),
    rhe56g: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-56g.jpg', 'RHE56G'),
    rhe56gm: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-56gm.jpg', 'RHE56GM'),
    rhe84g: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-56g.jpg', 'RHE84G'),
    rhe84gm: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhe-56gm.jpg', 'RHE84GM'),
    rhs75: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-75.jpg', 'RHS75'),
    rhs75p: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-75-p.jpg', 'RHS75P'),
    rhs11708: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-117.jpg', 'RHS117/0.8'),
    rhs117p08: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-117-p.jpg', 'RHS117P/0.8'),
    rhs117: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-117.jpg', 'RHS117'),
    rhs117p: new ViewLamel('../../../assets/img/catalog/rollet/complectations/rhs-117-p.jpg', 'RHS117P'),
  };

  colorLamels = {
    white: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-white.jpg',
      'RAL 9003 Белый'
    ),
    brown: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-brown.jpg',
      'RAL 8014 Коричневый'
    ),
    blue: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-blue.jpg',
      'RAL 5005 Синий'
    ),
    green: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-green.jpg',
      'RAL 6005 Зеленый'
    ),
    silver: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-silver.jpg',
      'RAL 9006 Серебро'
    ),
    gray: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-gray.jpg',
      'RAL 7004 Серый'
    ),
    ivory: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-ivory.jpg',
      'RAL 1014 Бежевый'
    ),
    wineRed: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-wine-red.jpg',
      'RAL 3005 Бордо'
    ),
    anthracite: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-anthracite.jpg',
      'RAL 7016 Антрацыт'
    ),
    notColor: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-not-color.jpg',
      'Неокрашенный (оцинкованный)'
    ),
  };

  colorLamelsAdditional = {
    whiteMaur: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-white-maur.jpg',
      'RAL 1013 Белая устрица муар'
    ),
    yellowNarcise: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-yellow-narcise.jpg',
      'RAL 1007 Желтый нарцисс'
    ),
    ivoryMaur: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-ivory-maur.jpg',
      'RAL 1015 Бежевый муар'
    ),
    yellowShfran: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-yellow-shfran.jpg',
      'RAL 1017 Желтый шафран'
    ),
    grayIvory: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-gray-ivory.jpg',
      'RAL 1019 Серый бежевый'
    ),
    redRubin: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-red-rubin.jpg',
      'RAL 3004 Красный рубин'
    ),
    redLight: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-red-light.jpg',
      'RAL 3020 Красный насыщенный'
    ),
    blueStil: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-blue-stil.jpg',
      'RAL 5011 Синяя сталь'
    ),
    greenFirTree: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-green-fir-tree.jpg',
      'RAL 6009 Зеленая ель'
    ),
    grayGraphit: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-gray-graphit.jpg',
      'RAL 7035 Серый графит'
    ),
    brownRed: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-brown-red.jpg',
      'RAL 8017 Коричневый шоколад'
    ),
    brownDarck: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-brown-darck.jpg',
      'RAL 8019 Темно-коричневый муар'
    ),
    blackShadow: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-black-shadow.jpg',
      'RAL 9005 Черный темный'
    ),
    anthracite: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-anthracite.jpg',
      'RAL 7016 Антрацыт'
    ),
    goldenOak: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-golden-oak.jpg',
      'Золотой дуб'
    ),
    darkWalnut: new ColorLamel(
      '../../../assets/img/catalog/rollet/complectations/color-dark-walnut.jpg',
      'Тёмный орех'
    ),
  };

  acsessuars = {
    swb: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/swb.jpg',
      'Выключатель клавишный SWB',
      'предназначен для управления одной ролетой',
    ),
    swm: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/swm.jpg',
      'Ключ-кнопка SWM',
      'для подачи управляющей команды на блок управления автоматической системы с помощью поворота ключа',
    ),
    cv01: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/cv-01.jpg',
      'Блок управления CV01',
      'пдля осуществления возможности дистанционного управления одной роллетой или группой роллет',
    ),
    smartRoll: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/smart-roll.jpg',
      'Блок управления SmartRoll',
      'предназначен для дистанционного управления внутривальными электроприводами роллет с помощью пультов DoorHan',
    ),
    roll: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/roll-1-2.jpg',
      'Блок Roll1/2',
      'для дистанционного управления внутривальными электроприводами роллет с помощью пультов DoorHan',
    ),
    gc: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/gc-2-4.jpg',
      'Блок группового управления GC2/GC4',
      'GC2 для управления двумя приводами с одного выключателя; блок GC4 — для управления четырьмя приводами',
    ),
    dhre1: new AcsessuarRollet(
      '../../../assets/img/catalog/avtomatica/acsessuars/dhre-1.jpg',
      'Приемник DHRE-1 внешний одноканальный',
      'предназначен для управления автоматикой компании DoorHan или других производителей при помощи пультов DoorHan.',
    ),
    smartcontrol2: new AcsessuarRollet(
      '../../../assets/img/catalog/avtomatica/acsessuars/wifi-smartcontrol-2.jpg',
      'Приемник WIFI SMARTCONTROL-2',
      'предназначен для беспроводного управления (выработки сигнала управления"NO") электроприводами.',
    ),
    gsm2: new AcsessuarRollet(
      '../../../assets/img/catalog/avtomatica/acsessuars/gsm-2.jpg',
      'Модуль GSM-2.0',
      'редназначен для приема сигнала с мобильного телефона и его преобразования в команду для управления автоматической системой.',
    ),
    t5: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/transmitter-2-pro.jpg',
      'Пульт T5',
      'предназначен для управления 5 роллетами',
    ),
    transmitter2Pro: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/transmitter-2-pro.jpg',
      'Пульт 2-х канальный TRANSMITTER 2-PRO',
      'предназначен для дистанционного управления двумя автоматическими'
      + 'устройствами DoorHan или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
    ),
    transmitter4Pro: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/transmitter-4-pro.jpg',
      'Пульт 4-х канальный TRANSMITTER 4-PRO',
      'предназначен для дистанционного управления двумя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
    ),
    transmitter4: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/transmitter-4.jpg',
      'Пульт 4-х канальный TRANSMITTER 4',
      'предназначен для дистанционного управления четырьмя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
    ),
    transmitterPremium: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/transmitter-4-premium.jpg',
      'Пульт 4-х канальный TRANSMITTER PREMIUM',
      'предназначен для дистанционного управления четырьмя автоматическими устройствами DoorHan'
      + 'или автоматикой других производителей, к которой подключен радиоприемник DoorHan.',
    ),
    photosell: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/photo-cell.jpg',
      'Фотоэлементы PHOTOCELL-N',
      'устройство безопасности, состоящее из инфракрасного передатчика и приемника, которые устанавливаются в проем ворот.'
      + 'В случае пересечения инфракрасного луча в блок управления поступает сигнал о появлении препятствия в опасной зоне'
      + 'действия автоматической системы, и система вырабатывает реакцию, соответствующую установленной логике'
      + 'работы - остановка или реверс полотна ворот.',
    ),
    lampPro: new AcsessuarRollet(
      '../../../assets/img/catalog/rollet/acsessuars/lamp-pro.jpg',
      'Сигнальная лампа LAMP-PRO',
      'устройство безопасности. Предупреждает о начале движении ворот, работает в течении всего цикла их движения.',
    ),
  };

  getViewsLamels(index): ViewLamel[] {
    const obj: ViewLamel[] = [];

    index.forEach(element => {
      for (const item in this.viewLamels) {
        if (element === item) {
          obj.push(this.viewLamels[element]);
        }
      }
    });

    return obj;
  }
  getColorLamels(index): ColorLamel[] {
    const obj: ColorLamel[] = [];

    index.forEach(element => {
      for (const item in this.colorLamels) {
        if (element === item) {
          obj.push(this.colorLamels[element]);
        }
      }
    });

    return obj;
  }
  getColorLamelsAdditional(index): ColorLamel[] {
    const obj: ColorLamel[] = [];

    index.forEach(element => {
      for (const item in this.colorLamelsAdditional) {
        if (element === item) {
          obj.push(this.colorLamelsAdditional[element]);
        }
      }
    });

    return obj;
  }
  getAcsessuarsRollet(index): AcsessuarRollet[] {
    const obj: AcsessuarRollet[] = [];

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

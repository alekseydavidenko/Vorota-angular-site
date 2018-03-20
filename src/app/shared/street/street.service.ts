import { Injectable } from '@angular/core';

import { ViewPanel } from './view-panel';
import { TypePanel } from './type-panel';
import { ColorPanelRal } from './color-panel';
import { Variant } from './variant';
import { FacingPremium } from './facing-premium';
import { AcsessuarStreet } from './acsessuar-street';

@Injectable()
export class StreetService {
  // View Panel
  viewsPapels = {
    board: new ViewPanel('../../../assets/img/catalog/street/complectation/view-board.jpg', 'Доска'),
    panel: new ViewPanel('../../../assets/img/catalog/street/complectation/view-panel.jpg', 'Филенка'),
    gofr: new ViewPanel('../../../assets/img/catalog/street/complectation/view-gofr.jpg', 'Гофр')
  };

  // Type Panel
  typePanel = {
    wood: new TypePanel('../../../assets/img/catalog/street/complectation/type-wood.jpg', 'Под дерево'),
    stucco: new TypePanel('../../../assets/img/catalog/street/complectation/type-stucco.jpg', 'Stucco')
  };

  // Clor Panel Ral
  colorPanelRal = {
    white: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-white.jpg',
      'RAL 9003 Белый'
    ),
    brown: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-brown.jpg',
      'RAL 8014 Коричневый'
    ),
    brownRed: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-brown-red.jpg',
      'RAL 8017 Коричнево красный'
    ),
    blue: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-blue.jpg',
      'RAL 5005 Синий'
    ),
    green: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-green.jpg',
      'RAL 6005 Зеленый'
    ),
    silver: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-silver.jpg',
      'RAL 9006 Серебро'
    ),
    red: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-red.jpg',
      'RAL 3000 Красный'
    ),
    gray: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-gray.jpg',
      'RAL 7004 Серый'
    ),
    anthracite: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-anthracite.jpg',
      'RAL 7016 Антрацыт'
    ),
    ivory: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-ivory.jpg',
      'RAL 1014 Бежевый'
    ),
    wineRred: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-wine-red.jpg',
      'RAL 3005 Бордо'
    ),
    wenge: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-wenge.jpg',
      'Венге'
    ),
    goldenOak: new ColorPanelRal(
      '../../../assets/img/catalog/street/complectation/color-golden-oak.jpg',
      'Золотой дуб'
    ),
  };

  // Variant
  variant = {
    sliding01: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-01.jpg',
      'Щит с вертикальным расположением сэндвич-панелей'
    ),
    sliding02: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-02.jpg',
      'Щит решетчаный с вертикальным расположением сэндвич-панелей'
    ),
    sliding03: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-03.jpg',
      'Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'
    ),
    sliding04: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-04.jpg',
      'Щит арочный с пиками с вертикальным расположением сэндвич-панелей'
    ),
    sliding05: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-05.jpg',
      'Щит арочный с решеткой с вертикальным расположением сэндвич-панелей'
    ),
    sliding06: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-sliding-06.jpg',
      'Щит арочный с пиками и вензелями с вертикальным расположением сэндвич-панелей'
    ),
    swing01: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-01.jpg',
      'Щит с вертикальным расположением сэндвич-панелей'
    ),
    swing02: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-02.jpg',
      'Щит решетчаный с вертикальным расположением сэндвич-панелей'
    ),
    swing03: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-03.jpg',
      'Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'
    ),
    swing04: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-04.jpg',
      'Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'
    ),
    swing05: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-05.jpg',
      'Щит арочный с пиками с вертикальным расположением сэндвич-панелей'
    ),
    swing06: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-swing-06.jpg',
      'Щит арочный с решеткой с вертикальным расположением сэндвич-панелей'
    ),
    wicket01: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-01.jpg',
      'Прямоугольный щит с заполнением из сэндвич-панелей'
    ),
    wicket02: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-02.jpg',
      'Прямоугольный щит с заполнением из сэндвич-панелей, алюминиевая решетка'
    ),
    wicket03: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-03.jpg',
      'Арочный щит с заполнением из сэндвич-панелей, алюминиевая решетка'
    ),
    wicket04: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-04.jpg',
      'Прямоугольный щит с заполнением из сэндвич-панелей, алюминиевая решетка, пики, (арка)'
    ),
    wicket05: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-05.jpg',
      'Прямоугольный щит с заполнением из сэндвич-панелей, алюминиевая решетка с вензелями, пики'
    ),
    wicket06: new Variant(
      '../../../assets/img/catalog/street/complectation/variant-wicket-06.jpg',
      'Прямоугольный щит с заполнением из сэндвич-панелей, алюминиевая решетка с вензелями, пики, (арка)'
    ),
  };

  // Facinf Premium
  facingPremium = {
    classic01: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-classic-01.jpg',
      'Premium Classic, темный орех'
    ),
    classic02: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-classic-02.jpg',
      'Premium Classic, темный орех'
    ),
    classic03: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-classic-03.jpg',
      'Premium Hi-Tech'
    ),
    wicket01: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-wicket-01.jpg',
      'Premium Classic, наклон влево, цвет «темный орех»'
    ),
    wicket02: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-wicket-02.jpg',
      'Premium Classic, наклон вправо, цвет «золотой дуб»'
    ),
    wicket03: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-wicket-03.jpg',
      'Premium Classic, наклон по центру, цвет «золотой дуб»'
    ),
    wicket04: new TypePanel(
      '../../../assets/img/catalog/street/complectation/facing-wicket-04.jpg',
      'Premium Hi-Tech, цвет щита антрацит (RAL 7016)'
    ),
  };

  // Acsessuar Section
  acsessuars = {
    frame: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-power-frame.jpg',
      'Комплект силовой рамы',
      'предназначена для крепления на нее приводной части автоматики и элементов подвеса полотна ворот.'
    ),
    window: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-window.jpg',
      'Окна',
      'белое, коричневое, ударопрочное оргстекло, декоративные вставки в виде креста или ромба.'
    ),
    automaticaSliding: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-automatica-sliding.jpg',
      'Электропривод',
      'позволяет автоматизировать открытие/закрытие сдвижных ворот.'
    ),
    automaticaSwing: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-automatica-swing.jpg',
      'Электропривод',
      'позволяет автоматизировать открытие/закрытие сдвижных ворот.'
    ),
    police: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-police.jpg',
      'Лежачий полицейский»',
      'обеспечивает легкость прокладки электропроводки между столбами —'
      + ' без штробления дорожного покрытия; изготавливается из износостойкого искусственного каучука.'
    ),
    photoCell: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-photo-cell.jpg',
      'Фотоэлементы безопасности',
      'предназначены для обнаружения людей, животных и посторонних предметов в'
      + ' проеме ворот при движении полотна для исключения травматизма.'
    ),
    lamp: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-lamp.jpg',
      'Сигнальная лампа',
      'сигнализирует о движении ворот в течение всего цикла открытия и закрытия.'
    ),
    pult: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-pult.jpg',
      'Дистанционное управление',
      'современный дизайн, небольшие размеры пультов.'
    ),
    keySwich: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-key-swich.jpg',
      'Ключ-кнопка',
      'защита ключом, компактный корпус, надежный механизм, механическая блокировка.'
    ),
    lockMechanic: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-lock-mechanic.jpg',
      'Замок механический',
      'врезной с ручками черного цвета.'
    ),
    lockMortise: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-lock-mortise-electro.jpg',
      'Замок врезной',
      'электромеханический.'
    ),
    lockOverhead: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-lock-overhead-electro.jpg',
      'Замок накладной',
      'электромеханический.'
    ),
    handleDelta: new AcsessuarStreet(
      '../../../assets/img/catalog/street/complectation/acsessuar-handle-delta.jpg',
      'Ручка алюминиевая Delta',
      'если выбран электромеханический замок, то ручка идет в комплекте с замком.'
    ),
  };

  getViewsPanels(index): ViewPanel[] {
    const obj: ViewPanel[] = [];

    index.forEach(element => {
      for (const item in this.viewsPapels) {
        if (element === item) {
          obj.push(this.viewsPapels[element]);
        }
      }
    });

    return obj;
  }

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

  getVariants(index): Variant[] {
    const obj: Variant[] = [];

    index.forEach(element => {
      for (const item in this.variant) {
        if (element === item) {
          obj.push(this.variant[element]);
        }
      }
    });

    return obj;
  }

  getFacingPremium(index): FacingPremium[] {
    const obj: FacingPremium[] = [];

    index.forEach(element => {
      for (const item in this.facingPremium) {
        if (element === item) {
          obj.push(this.facingPremium[element]);
        }
      }
    });

    return obj;
  }

  getAcsessuars(index): AcsessuarStreet[] {
    const obj: AcsessuarStreet[] = [];

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

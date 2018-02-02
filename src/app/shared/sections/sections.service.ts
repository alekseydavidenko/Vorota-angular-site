import { Injectable } from '@angular/core';

import { ViewPanel } from './view-panel';
import { TypePanel } from './type-panel';
import { ColorPanelWood } from './color-panel-wood';
import { ColorPanelRal } from './color-panel-ral';
import { FacingPremium } from './facing-premium';
import { AcsessuarSections } from './acsessuar-sections';

@Injectable()
export class SectionsService {

  // View Panel
  viewsPapels = {
    gofr: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-gofr.jpg', 'Доска'),
    wave: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-wave.jpg', 'Волна'),
    strip: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-sharp-strip.jpg', 'Широкая полоса'),
    tLine: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-t-line.jpg', 't-line'),
    smooth: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-smooth.jpg', 'Гладкая'),
    panel: new ViewPanel('../../../../assets/img/catalog/section/complectation/view-panel.jpg', 'Филенка'),
  };

  // Type Panel
  typePanel = {
    wood: new TypePanel('../../../../assets/img/catalog/section/complectation/type-wood.jpg', 'Под дерево'),
    stucco: new TypePanel('../../../../assets/img/catalog/section/complectation/type-stucco.jpg', 'Stucco'),
    smooth: new TypePanel('../../../../assets/img/catalog/section/complectation/type-smooth.jpg', 'Гладкая')
  };

  // Color Panel Wood
  colorPanelWood = {
    darkOak: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-dark-oak.jpg', 'Темный дуб'),
    goldenOak: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-golden-oak.jpg', 'Золтой дуб'),
    mahagony: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-mahagony.jpg', 'Махагон'),
    satinGrey: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-satin-grey.jpg', 'Satin gray'),
    wenge: new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-wenge.jpg', 'Венге')
  };

  // Clor Panel Ral
  colorPanelRal = {
    white: new ColorPanelRal('white', 'RAL 9003 Белый'),
    brown: new ColorPanelRal('brown', 'RAL 8014 Коричневый'),
    blue: new ColorPanelRal('blue', 'RAL 5005 Синий'),
    green: new ColorPanelRal('green', 'RAL 6005 Зеленый'),
    silver: new ColorPanelRal('silver', 'RAL 9006 Серебро'),
    red: new ColorPanelRal('red', 'RAL 3000 Красный'),
    gray: new ColorPanelRal('gray', 'RAL 9007 Серый'),
    anthracite: new ColorPanelRal('anthracite', 'RAL 7016 Антрацыт'),
    black: new ColorPanelRal('black', 'RAL 9005 Черный'),
  };

  // Facinf Premium
  facingPremium = {
    classic01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-01.jpg',
      'Premium Classic, рисунок смещен влево, цвета «золотой дуб» и «темный орех»'
    ),
    classic02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-02.jpg',
      'Premium Classic, рисунок смещен вправо, цвета «золотой дуб» и «темный орех»'),
    classic03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-03.jpg',
      'Premium Classic, цвета «золотой дуб» и «темный орех»'),
    classic04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-classic-04.jpg',
      'Premium Classic, цвета «золотой дуб», RAL 9003, RAL 8014'),
    country01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-01.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-02.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-03.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    country04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-country-04.jpg',
      'Premium Country, цвета «золотой дуб» и «темный орех»'),
    hiTech01: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-01.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech02: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-02.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech03: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-03.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
    hiTech04: new TypePanel(
      '../../../assets/img/catalog/section/complectation/facing-hi-tech-04.jpg',
      'Premium Hi-Tech, облицовка молдингами'),
  };

  // Acsessuar Section
  acsessuars = {
    valve: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/acsessuar-valve.jpg',
      'Механическая задвижка',
      'Позволяет запирать ворота изнутри помещения. Отличается простотой и надежностью.'
    ),
    lock: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/acsessuar-lock.jpg',
      'Механический замок',
      'Позволяет блокировать полотно ворот в закрытом положении как изнутри помещения, так и со стороны улицы.'
    ),
    windowMinPromBlack: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-607-202-black.jpg',
      'Окно акриловое 607х202, черное (арт. DH85602)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
    ),
    windowMaxPromBlack: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-635-330-black.jpg',
      'Окно акриловое 635х330, черное',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
    ),
    windowWhite: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white.jpg',
      'Окно акриловое 452х302, белое (арт. DH85626)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка белого цвета.'
    ),
    windowBrown: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown.jpg',
      'Окно акриловое 452х302, коричневое (арт. DH85631)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Окантовка коричневого цвета.'
    ),
    windowWhiteCross: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white-cross.jpg',
      'Окно акриловое 452х302, белое с раскладкой «крест» (арт. DH85627)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
      + 'Окантовка белого цвета.'
    ),
    windowBrownCross: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown-cross.jpg',
      'Окно акриловое 452х302, коричневое с раскладкой «крест» (арт. DH85628)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
      + 'Окантовка коричневого цвета.'
    ),
    windowWhiteRomb: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-white-romb.jpg',
      'Окно акриловое 452х302, белое с раскладкой «ромб» (арт. DH85629)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба. Окантовка белого цвета.'
    ),
    windowBrownRomb: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/window-452-302-brown-romb.jpg',
      'Окно акриловое 452х302, коричневое с раскладкой «ромб» (арт. DH85629)',
      'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
      + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба.'
      + 'Окантовка коричневого цвета.'
    ),
    wicket: new AcsessuarSections(
      '../../../assets/img/catalog/section/complectation/wicket.jpg',
      'Калитка',
      'Имеет усовершенствованную конструкцию, отличается высокой прочностью и эстетичным внешним видом.'
      + 'Минимальная высота щита — 2 130 мм.'
    )
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

  getColorsPanelsWood(index): ColorPanelWood[] {
    const obj: ColorPanelWood[] = [];

    index.forEach(element => {
      for (const item in this.colorPanelWood) {
        if (element === item) {
          obj.push(this.colorPanelWood[element]);
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

  getAcsessuarsSections(index): AcsessuarSections[] {
    const obj: AcsessuarSections[] = [];

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

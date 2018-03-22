import { Injectable } from '@angular/core';

import { Color } from './color';
import { Acsessuar } from './acsessuar';

@Injectable()
export class TransshipmentService {
  type = {
    lenticular: new Color(
      '../../../assets/img/catalog/transshipment/complectations/type-lenticular-corrugation.jpg',
      'Чечевичное рифление'
    ),
  };

  color = {
    black: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-black.jpg',
      'Черный RAL 9005'
    ),
    blue: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-blue.jpg',
      'Синий RAL 5005'
    ),
  };

  colorWall = {
    white: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-white.jpg',
      'Белый RAL 9003'
    ),
    blue: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-blue.jpg',
      'Синий RAL 5005'
    ),
    gray: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-gray.jpg',
      'Серый RAL 7004'
    ),
    red: new Color(
      '../../../assets/img/catalog/transshipment/complectations/color-red.jpg',
      'Красный RAL 3000'
    ),
  };

  acsessuars = {
    dcuh1: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/dcuh-1.jpg',
      'Блок управления DCUH-1',
      'базовый. Питание 380 В 3 фазы. Управление платформой осуществляется по удержанию кнопки.'
      + 'Возврат в парковочное положение по удержанию кнопки. Блокировка платформы при закрытых воротах.'
    ),
    dcuh2: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/dcuh-2.jpg',
      'Блок управления DCUH-2',
      'c расширенными функциями. Питание 380 В 3 фазы. Управление платформой осуществляется по удержанию кнопки.'
      + 'Автоматический возврат в парковочное положение по однократному нажатию кнопки AUTO.'
      + 'Блокировка платформы при закрытых воротах. Возможность подключения внешнего/внутреннего светофора.'
      + 'Освещение платформы. Индикатор необходимости технического обслуживания. Цифровой дисплей.'
    ),
    dcuh3: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/dcuh-3.jpg',
      'Блок управления DCUH-3',
      'Комплексное устройство для управления элементами перегрузочного дока. Питание 380 В 3 фазы.'
      + 'Управление платформой осуществляется по удержанию кнопки. Автоматический возврат в парковочное положение'
      + 'по однократному нажатию кнопки AUTO. Блокировка платформы при закрытых воротах.'
      + 'Возможность подключения внешнего/внутреннего светофора. Освещение платформы.'
      + 'Индикатор необходимости технического обслуживания. Цифровой дисплей.'
      + 'Управление приводом ворот. Управление надувным герметизатором.'
    ),
    trafficlightSensor: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/trafficlight-sensor.jpg',
      'Сенсор фотоэлектрический',
      'предназаначен для взаимной блокировки платформы и секционных ворот.'
      + 'При закрытых воротах датчик блокирует упраление платформой, чтобы избежать повреждение ворот.'
    ),
    wheelGuides: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/wheel-guides.jpg',
      'Направляющие для колес',
      'предназначены для обеспечения быстрой и точной парковки автомобиля в доке,'
      + 'а также предотвращения повреждения герметизаторов и стен здания.'
      + 'Направляющие разработаны таким образом, чтобы свести к минимуму возможный контакт с ободом колеса автомобиля.'
      + 'Они представляют собой стальные трубы диаметром 159 мм с отводами для крепления и устанавливаются на площадке перед доком.'
      + 'Направляющие устанавливаются двумя способами — на анкерных болтах и с помощью бетонирования.'
    ),
    fence: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/fence.jpg',
      'Ограждения',
      'устанавливаются внутри помещения, предназначены для предотвращения повреждения стен здания автопогрузчиком,'
      + 'обеспечивая правильное и безопасное его движение по складскому помещению и при подъезде к доку.'
      + 'Ограждения представляют собой круглые трубы диаметром 100–159 мм,'
      + 'могут иметь произвольную форму и выполняются по эскизам заказчика.'
    ),
    pillar: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/pillar.jpg',
      'Столбики отбойные',
      'предназначены для предотвращения повреждений угловых стоек ворот при наезде автопогрузчика,'
      + 'устанавливаются перед ними внутри помещения. Диаметр отбойного столбика — от 100 до 159 мм.'
    ),
    concretingFrame: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/concreting-frame.jpg',
      'Рама для бетонирования',
      'изготавливается в соответствии с монтажными размерами уравнительной платформы.'
    ),
    trafficlightLed: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/trafficlight-led.jpg',
      'Светофор Traffic-light-LED',
      'Предназначен для обеспечения безопасного движения грузового автомобиля и погрузчика'
      + 'в момент подъезда/отъезда и процесса погрузки. Может быть подключен к блокам управления серий DCUH-2, DCUH-3.'
    ),
    br250: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/br-250.jpg',
      'Бампер резиновый 250х250х100 мм.',
      'Базовый. Обеспечивает безопасный подъезд грузового автомобиля к погрузочному месту'
      + 'и предотвращает повреждение стен здания.'
    ),
    br450: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/br-450.jpg',
      'Бампер резиновый 450x250x100 мм.',
      'Базовый. Обеспечивает безопасный подъезд грузового автомобиля к погрузочному месту'
      + 'и предотвращает повреждение стен здания.'
    ),
    brc510: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/brc-510.jpg',
      'Бампер резиновый 510х250х330 мм',
      'построен на базе бампера 450x250x100 мм. Консольного типа. Обеспечивает безопасный подъезд'
      + 'грузового автомобиля к погрузочному месту и предотвращает повреждение стен здания.'
      + 'Используется в случае, когда высота кузова автомобиля может быть больше высоты пандуса.'
    ),
    brm600: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/brm-600.jpg',
      'Бампер резиновый 600х364х110 мм',
      'построен на базе бампера 450x250x100 мм. Подвижный.'
      + 'Следует движениям грузового автомобиля вверх и вниз при погрузке/разгрузке.'
      + 'Обладает значительно большей износостойкостью благодаря подвижности.'
    ),
    brsp1: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/brsp-1.jpg',
      'Бампер 465х250х16 мм со стальной рабочей накладкой толщиной 16 мм',
      'построен на базе бампера 450x250x100 мм. Состоит из амортизирующего по всей'
      + 'поверхности наполнителя (резинового бампера 450x250x100 мм), закрытого прочной внешней стальной пластиной.'
    ),
    brsp2: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/brsp-2.jpg',
      'Бампер 465х250х165 мм со стальной рабочей накладкой толщиной 16 мм и датчиком парковки',
      'построен на базе бампера 450x250x100 мм. Состоит из амортизирующего по всей поверхности наполнителя'
      + '(резинового бампера 450x250x100 мм), закрытого прочной внешней стальной пластиной и дачка парковки,'
      + 'который обеспечивает безопасную пристыковку грузового автомобиля. Используется в системе с парковочным радаром.'
    ),
    bs500: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/bs-500.jpg',
      'Бампер стальной 500х255х205 мм с демпферной вставкой',
      'построен на базе бампера 450x250x100 мм. Является гибридным бампером,'
      + 'представляет собой комбинацию подвижного бампера и бампера с металлической пластиной.'
      + 'Состоит из держателя, демпфирующей вставки, изготовленной из резиновой крошки'
      + 'и подвижной прочной внешней стальной крышки, имеющей возможность двигаться вслед за движениями кузова автомобиля.'
      + 'Возможно использовать только с платформами с выдвижной аппарелью длинной 1000 мм.'
    ),
    bs800: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/bs-800.jpg',
      'Бампер стальной 800х255х205 мм с демпферной вставкой',
      'построен на базе бампера 450x250x100 мм. Является гибридным бампером,'
      + 'представляет собой комбинацию подвижного бампера и бампера с металлической пластиной.'
      + 'Состоит из держателя, демпфирующей вставки, изготовленной из резиновой крошки'
      + 'и подвижной прочной внешней стальной крышки, имеющей возможность двигаться вслед за движениями кузова автомобиля.'
      + 'Возможно использовать только с платформами с выдвижной аппарелью длинной 1000 мм.'
    ),
    movableTopSheet: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/movable-top-sheet.jpg',
      'Механизм подвижного верхнего листа',
      'устанавливается внутри герметизатора и служит для дополнительной герметизации проема'
    ),
    smallPillow: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/small-pillow.jpg',
      'Подушка',
      'малая угловая'
    ),
    bigPillow: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/big-pillow.jpg',
      'Подушка',
      'большая угловая'
    ),
    elongation: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/elongation.jpg',
      'Удлинение',
      'верхней подушки 1 200 мм'
    ),
    dcwithoutWallsAndRoof: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/without-walls-and-roof.jpg',
      'Без стен и крыши',
      null
    ),
    add1: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/add.jpg',
      'Исполнение для выступа пандуса здания',
      'от 1 до 500 мм (пандус здания выступает на 1–500 мм относительно стены здания)'
    ),
    add2: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/add.jpg',
      'Утепление',
      'крыши тамбура сэндвич-панелями'
    ),
    add3: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/add.jpg',
      'Исполнение стен',
      'из профлиста С20. 4 стандартных цвета: RAL 9003 (белый), RAL 5005 (синий), RAL 7004 (серый), RAL 3000 (красный)'
    ),
    add4: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/add.jpg',
      'Исполнение стен',
      'из любого профлиста. Цвет по образцу заказчика'
    ),
    add5: new Acsessuar(
      '../../../assets/img/catalog/transshipment/acsessuars/add.jpg',
      'Комплектование тамбура',
      'доборными элементами для обрамления стыка тамбура со стеной здания склада'
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
  getColorWall(index): Color[] {
    const obj: Color[] = [];

    index.forEach(element => {
      for (const item in this.colorWall) {
        if (element === item) {
          obj.push(this.colorWall[element]);
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

import {
  ViewPanel,
  TypePanel,
  ColorPanelWood,
  ColorPanelRal,
  AcsessuarVorot,
  Construction,
  Size
} from '../../../shared/idex';

export const ViewsPapels: ViewPanel[] = [
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-gofr.jpg', 'Доска'),
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-wave.jpg', 'Волна'),
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-sharp-strip.jpg', 'Широкая полоса'),
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-t-line.jpg', 't-line'),
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-smooth.jpg', 'Гладкая'),
  new ViewPanel('../../../../assets/img/catalog/section/complectation/view-panel.jpg', 'Филенка'),
];

export const TypesPanels: TypePanel[] = [
  new TypePanel('../../../../assets/img/catalog/section/complectation/type-wood.jpg', 'Под дерево'),
  new TypePanel('../../../../assets/img/catalog/section/complectation/type-stucco.jpg', 'Stucco'),
  new TypePanel('../../../../assets/img/catalog/section/complectation/type-smooth.jpg', 'Гладкая')
];

export const ColorsPanelsWood: ColorPanelWood[] = [
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-dark-oak.jpg', 'Темный дуб'),
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-golden-oak.jpg', 'Золтой дуб'),
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-mahagony.jpg', 'Махагон'),
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-satin-grey.jpg', 'Satin gray'),
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-wenge.jpg', 'Венге')
];

export const ColosPanelsRal: ColorPanelRal[] = [
  new ColorPanelRal('white', 'RAL 9003 Белый'),
  new ColorPanelRal('brown', 'RAL 8014 Коричневый'),
  new ColorPanelRal('blue', 'RAL 5005 Синий'),
  new ColorPanelRal('green', 'RAL 6005 Зеленый'),
  new ColorPanelRal('silver', 'RAL 9006 Серебро'),
  new ColorPanelRal('red', 'RAL 3000 Красный'),
  new ColorPanelRal('gray', 'RAL 9007 Серый'),
  new ColorPanelRal('anthracite', 'RAL 7016 Антрацыт'),
  new ColorPanelRal('black', 'RAL 9005 Черный'),
];

export const Acsessuars: AcsessuarVorot[] = [
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/acsessuar-valve.jpg',
    'Механическая задвижка',
    'Позволяет запирать ворота изнутри помещения. Отличается простотой и надежностью.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/acsessuar-lock.jpg',
    'Механический замок',
    'Позволяет блокировать полотно ворот в закрытом положении как изнутри помещения, так и со стороны улицы.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-607-202-black.jpg',
    'Окно акриловое 607х202, черное (арт. DH85602)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-635-330-black.jpg',
    'Окно акриловое 635х330, черное',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Окантовка черного цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-white.jpg',
    'Окно акриловое 452х302, белое (арт. DH85626)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Окантовка белого цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-brown.jpg',
    'Окно акриловое 452х302, коричневое (арт. DH85631)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Окантовка коричневого цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-white-cross.jpg',
    'Окно акриловое 452х302, белое с раскладкой «крест» (арт. DH85627)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
    + 'Окантовка белого цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-brown-cross.jpg',
    'Окно акриловое 452х302, коричневое с раскладкой «крест» (арт. DH85628)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме креста.'
    + 'Окантовка коричневого цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-white-romb.jpg',
    'Окно акриловое 452х302, белое с раскладкой «ромб» (арт. DH85629)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба. Окантовка белого цвета.'
  ),
  new AcsessuarVorot(
    '../../../../assets/img/catalog/section/complectation/window-452-302-brown-romb.jpg',
    'Окно акриловое 452х302, коричневое с раскладкой «ромб» (арт. DH85629)',
    'Специальная конструкция обеспечивает плотное прилегание к полотну ворот,'
    + 'что защищает его от промерзания и теплопотери. Стилистическая вставка в форме ромба.'
    + 'Окантовка коричневого цвета.'
  )
];

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '1 800 - 3 000'),
  new Size('Ширина проема, мм', '2 000 - 3 100'),
  new Size('Притолока, мм', 'от 100'),
  new Size('Пристенки, мм, мм', 'от 100')
];

export const Constructions: Construction[] = [
  new Construction('Стальной ригель с установленным верхним контурным многокамерным уплотнителем'),
  new Construction('Контурные боковые многокамерные уплотнители'),
  new Construction('Нижний встраиваемый стальной профиль с терморазделением и нижний уплотнитель'),
  new Construction('Верхний угловой кронштейн регулируемый'),
  new Construction('Боковая опора с регулируемым роликодержателем'),
  new Construction('Нижний угловой кронштейн с регулируемым роликодержателем'),
  new Construction('Внутреняя петля'),
  new Construction('Вертикальная направляющая в сборе'),
  new Construction('Горизонтальная направляющая в сборе'),
  new Construction('Дистанционный С-профиль'),
  new Construction('Сэндвич-панель'),
  new Construction('Кронштейн с двойным шкивом'),
  new Construction('Г-образный кронштейн крепления к потолку, установленный на кронштейн произвольной фиксации'),
  new Construction('Ручка подъемная'),
  new Construction('Задвижка (опция)'),
  new Construction('Пружины растяжения')
];

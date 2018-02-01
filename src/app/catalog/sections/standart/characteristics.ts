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
];

export const TypesPanels: TypePanel[] = [
  new TypePanel('../../../../assets/img/catalog/section/complectation/type-wood.jpg', 'Под дерево'),
];

export const ColorsPanelsWood: ColorPanelWood[] = [
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-dark-oak.jpg', 'Темный дуб'),
  new ColorPanelWood('../../../../assets/img/catalog/section/complectation/color-golden-oak.jpg', 'Золтой дуб'),
];

export const ColosPanelsRal: ColorPanelRal[] = [
  new ColorPanelRal('white', 'RAL 9003 Белый'),
  new ColorPanelRal('brown', 'RAL 8014 Коричневый'),
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
  )
];
export const CharacteristicSize: Size[] = [
  new Size('Комплект №1 ширина/высота проема, мм', '2500х2150'),
  new Size('Комплект №2 ширина/высота проема, мм', '2500х2280'),
  new Size('Комплект №3 ширина/высота проема, мм', '2500х2530'),
  new Size('Комплект №4 ширина/высота проема, мм', '2750х2530'),
  new Size('Комплект №5 ширина/высота проема, мм', '2750х2280'),
  new Size('Комплект №6 ширина/высота проема, мм', '3000х2030'),
  new Size('Комплект №7 ширина/высота проема, мм', '3000х2280'),
  new Size('Комплект №8 ширина/высота проема, мм', '3000х2530'),
  new Size('Комплект №9 ширина/высота проема, мм', '3000х2680'),
  new Size('Комплект №10 ширина/высота проема, мм', '3350х2150'),
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
  new Construction('Пружины растяжения'),
];

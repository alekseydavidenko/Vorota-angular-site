import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '1 800 - 3 000'),
  new Size('Ширина проема, мм', '2 000 - 3 100'),
  new Size('Притолока, мм', 'от 100'),
  new Size('Пристенки, мм', 'от 100')
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

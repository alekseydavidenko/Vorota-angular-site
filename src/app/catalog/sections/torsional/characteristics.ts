import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '1 800 - 3 100'),
  new Size('Ширина проема, мм', '2 000 - 6 000'),
  new Size('Притолока, мм', 'от 150'),
  new Size('Пристенки, мм', 'от 120')
];

export const Constructions: Construction[] = [
  new Construction('Система уравновешивания полотна ворот (пружинно-торсионный механизм)'),
  new Construction('Концевой П-образный опорный кронштейн'),
  new Construction('Верхний профиль'),
  new Construction('Направляющие для полотна ворот'),
  new Construction('Опора с роликодержателем и роликом'),
  new Construction('Угловая стойка'),
  new Construction('Боковая крышка'),
  new Construction('Устройство защиты от обрыва пружины'),
  new Construction('Система крепления к потолку'),
  new Construction('Верхний опорный кронштейн'),
  new Construction('Верхний уплотнитель'),
  new Construction('Петля'),
  new Construction('Полотно ворот из сэндвич-панели'),
  new Construction('Задвижка (опция)'),
  new Construction('Нижний опорный кронштейн'),
  new Construction('Нижний профиль с уплотнителем'),
  new Construction('Ручка')
];

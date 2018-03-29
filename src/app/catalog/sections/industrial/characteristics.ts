import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '2 000 - 8 000'),
  new Size('Ширина проема, мм', '2 000 - 8 000'),
  new Size('Притолока, мм', 'от 150'),
  new Size('Пристенки, мм', 'от 120')
];

export const Constructions: Construction[] = [
  new Construction('Вертикальная направляющая'),
  new Construction('Угловая стойка'),
  new Construction('Вал цилиндрический'),
  new Construction('Устройство защиты от обрыва пружины'),
  new Construction('Барабан'),
  new Construction('Кронштейн П-образный'),
  new Construction('Балансирующий пружинный механизм (торсионная пружина)'),
  new Construction('Муфта соединительная'),
  new Construction('Внутренний опорный кронштейн'),
  new Construction('Верхняя опора с держателем ролика'),
  new Construction('Боковая опора с держателем ролика'),
  new Construction('Усиливающий дельта-профиль'),
  new Construction('Устройство защиты от разрыва троса'),
  new Construction('Сэндвич-панель'),
  new Construction('Внутренняя петля'),
  new Construction('Нижний профиль и уплотнитель'),
  new Construction('Уплотнитель боковой'),
  new Construction('Верхний профиль'),
  new Construction('Верхний уплотнитель'),
  new Construction('Боковая крышка для панелей с отверстиями для крепления'),
  new Construction('Ручка-ступенька'),
  new Construction('Пружинный амортизатор'),
  new Construction('Кронштейн крепления к потолку'),
];

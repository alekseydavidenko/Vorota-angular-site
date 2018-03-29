import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '2 000 - 6 000'),
  new Size('Ширина проема, мм', '2 000 - 6 100'),
  new Size('Притолока, мм', 'от 150'),
  new Size('Пристенки, мм', 'от 120'),
  new Size('Высота светового проема ячеек, мм', '370 - 720'),
  new Size('Ширина светового проема ячеек, мм',
  'не более 600 мм (при вертикальном подъеме и ширине полотна от 4 500 до 6 100 мм ширина светового проема не более 900 мм)')
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
  new Construction('Внутренняя петля'),
  new Construction('Устройство защиты от разрыва троса'),
  new Construction('Нижний профиль'),
  new Construction('Панорамная панель'),
  new Construction('Нижний уплотнитель'),
  new Construction('Уплотнитель боковой'),
  new Construction('Верхний профиль'),
  new Construction('Верхний уплотнитель'),
  new Construction('Боковая крышка с отверстиями для крепления'),
  new Construction('Светопрозрачное заполнение панели'),
  new Construction('Пружинный амортизатор'),
  new Construction('Кронштейн крепления к потолку'),
];

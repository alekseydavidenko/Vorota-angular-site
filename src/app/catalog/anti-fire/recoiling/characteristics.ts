import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '	2 000 - 7 000 (для одностворчатых ворот)'),
  new Size('Ширина проема, мм', '	2 000 - 9 000 (для двустворчатых ворот)'),
  new Size('Высота проема, мм', '	2 000 - 6 000'),
  new Size('Притолока, мм', 'от 450'),
  new Size('Пристенки, мм', 'от 250 со стороны столба ловителя, ширина проема + 350'
    + 'со стороны направления открытия ворот (для одностворчатых)'),
  new Size('Пристенки, мм', '(ширина проема)/2+150 с двух сторон при симметричных створках,'
    + 'при несимметричных створках ширина створки + 400 с двух сторон (для двустворчатых)'),
];

export const Constructions: Construction[] = [
  new Construction('Полотно ворот'),
  new Construction('Нижний направляющий ролик'),
  new Construction('Опора навесная'),
  new Construction('Балка'),
  new Construction('Встроенная калитка'),
  new Construction('Столб-ловитель'),
  new Construction('Ручка'),
];

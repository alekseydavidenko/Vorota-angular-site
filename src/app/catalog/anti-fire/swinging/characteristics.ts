import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '	2 000 - 4 500'),
  new Size('Высота проема, мм', '	2 000 - 4 500)'),
  new Size('Притолока, мм', '0'),
  new Size('Пристенки, мм', '	0'),
];

export const Constructions: Construction[] = [
  new Construction('Полотно ворот'),
  new Construction('Рама ворот'),
  new Construction('Задвижка ригельная'),
  new Construction('Врезная калитка'),
  new Construction('Замок'),
  new Construction('Ручка'),
];

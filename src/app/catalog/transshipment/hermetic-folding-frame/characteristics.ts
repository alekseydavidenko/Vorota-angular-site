import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина конструкции, мм', '3 000 / 3 200 / 3 400'),
  new Size('Высота конструкции, мм', '3 000 / 3 200 / 3 400 / 4 400'),
];

export const Constructions: Construction[] = [
  new Construction('Верхний фронтальный лист'),
  new Construction('Боковой фронтальный лист'),
  new Construction('Раскос'),
  new Construction('Пружина'),
  new Construction('Чулок цельный с системой стока воды'),
  new Construction('Белая световозвращающая полоса'),
  new Construction('Жгут резиновый'),
];

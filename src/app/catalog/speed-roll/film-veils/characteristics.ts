import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Ширина проема, мм', '1500 / 2000 / 3000 / 3500 / 4500 / 5000 / 6000'),
  new Size('Высота проема, мм', '1500 / 2000 / 2300 / 3000 / 3200 / 3700 / 5000'),
  new Size('Размеры пленки (Ширина х Толщина), мм', '200 х 2 / 300 х 3 / 400 х 4'),

];

export const Constructions: Construction[] = [
  new Construction('Кронштейн «гребенка»'),
  new Construction('Пластина монтажная'),
  new Construction('Пленка'),
];

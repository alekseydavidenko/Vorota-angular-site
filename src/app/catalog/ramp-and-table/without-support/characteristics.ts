import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Длина конструкции, мм', '12 000'),
  new Size('Ширина конструкции, мм', '2 200'),
  new Size('Ширина проезжей части рампы мобильной, мм', '1 900'),
];

export const Constructions: Construction[] = [
  new Construction('Настил проезжей части'),
  new Construction('Аппарель нижняя поворотная'),
  new Construction('Аппарель верхняя поворотная'),
  new Construction('Опора, регулируемая по высоте'),
  new Construction('Колесо'),
];

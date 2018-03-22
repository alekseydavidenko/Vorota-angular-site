import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Длина платформы с допустимой нагрузкой 6 000 кг (60 кН)*, мм', '2 500'),
  new Size('Ширина уравнительной платформы, мм', '1 800 / 2 000'),
];

export const Constructions: Construction[] = [
  new Construction('Механизмы демпфирования аппарели'),
  new Construction('Боковые шторки безопасности'),
  new Construction('Аппарель'),
  new Construction('Механизмы балансировки платформы'),
  new Construction('Механизмы открытия аппарели'),
  new Construction('Крышка платформы'),
  new Construction('Ферма'),
  new Construction('Сигнальная желто-черная полоса'),
  new Construction('Ручки подъема платформы'),
  new Construction('Цепной привод управления аппарелью'),
];

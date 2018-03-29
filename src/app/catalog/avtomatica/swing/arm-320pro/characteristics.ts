import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Мотор-редуктор'),
  new Construction('Прямой рычаг'),
  new Construction('Изогнутый рычаг'),
  new Construction('Ручной рaсцепитель'),
  new Construction('Кронштейн крепления рычага'),
  new Construction('Концевые выключатели'),
  new Construction('Кронштейн крепления привода'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальная длина створки, м', '2', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Максимальный вес створки, кг.', '400', null),
  new Specification('Мощность, Вт', '300', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55', null),
  new Specification('Скорость открывания, м/мин', '0,78', null),
  new Specification('Класс защиты IP', '44', null),
  new Specification('Интенсивность использования, %', '30', null),
];

import { Construction, Specification } from '../../../../shared/idex';

export const Constructions: Construction[] = [
  new Construction('Мотор'),
  new Construction('Силовой кабель'),
  new Construction('Задний кронштейн'),
  new Construction('Передний кронштейн'),
  new Construction('Корпус'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальная длина створки, м', '2,5', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Максимальный вес створки, кг.', '350', null),
  new Specification('Мощность, Вт', '280', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+70', null),
  new Specification('Скорость открывания, м/мин', '1,08', null),
  new Specification('Класс защиты	IP', '54', null),
  new Specification('Интенсивность использования, %', '50', null),
];

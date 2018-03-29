import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Крышкa корпуса'),
  new Construction('Шестерня'),
  new Construction('Конденсaтор'),
  new Construction('Корпус редукторa'),
  new Construction('Крепление приводa'),
  new Construction('Блок управления'),
  new Construction('Стaтор'),
  new Construction('Расцепитель'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальный вес полотна ворот, кг', '500', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Максимальный действующий момент, Нм', '16', null),
  new Specification('Мощность, Вт', '260', null),
  new Specification('Диапазон рабочих температур, °С', '-20...+55	', null),
  new Specification('Скорость открывания, м/мин', '10', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '50', null),
];

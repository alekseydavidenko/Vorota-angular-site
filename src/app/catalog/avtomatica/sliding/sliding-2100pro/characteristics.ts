import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Крышка корпусa'),
  new Construction('Платa управления'),
  new Construction('Корпус редукторa'),
  new Construction('Считывaтель концевых выключателей'),
  new Construction('Статор'),
  new Construction('Конденсaтор'),
  new Construction('Шестерня'),
  new Construction('Крышкa крепления'),
  new Construction('Крепление привода'),
  new Construction('Расцепитель'),
  new Construction('Ключ расцепителя'),
  new Construction('Винт крепления крышки корпуса'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальный вес полотна ворот, кг', '2100', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Максимальное усилие, Н', '1350', null),
  new Specification('Мощность, Вт', '800', null),
  new Specification('Диапазон рабочих температур, °С', '-40...+55', null),
  new Specification('Максимальный действующий момент, Нм', '27,5', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '70', null),
];

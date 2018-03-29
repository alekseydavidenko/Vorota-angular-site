import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Корпус редукторa'),
  new Construction('Отверстие под вал ворот'),
  new Construction('Двигатель'),
  new Construction('Узел ручной цепи'),
  new Construction('Ручная цепь'),
  new Construction('Кабель'),
  new Construction('Клеммная колодка'),
  new Construction('Рукоятка расцепителя'),
  new Construction('Концевик'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Площадь ворот, м²', '18', null),
  new Specification('Напряжение питания, В', '220-240', null),
  new Specification('Крутящий момент, Нм', '30', null),
  new Specification('Двигатель, В', '220', null),
  new Specification('Диапазон рабочих температур, °С', '-40...+55', null),
  new Specification('Скорость движения ворот, мм/с', '171–345', 'В зависимости от используемого диаметра барабана'),
  new Specification('Скорость вращения мотора, об/мин', '1400', null),
  new Specification('Класс защиты IP', '65', null),
  new Specification('Интенсивность использования, %', '50', null),
];

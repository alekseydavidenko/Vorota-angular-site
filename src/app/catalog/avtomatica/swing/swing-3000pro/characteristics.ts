import { Construction, Specification } from '../../../../shared/catalog/idex';

export const Constructions: Construction[] = [
  new Construction('Привод'),
  new Construction('Кронштейн крепления'),
  new Construction('Концевой выключaтель'),
  new Construction('Ходовой винт'),
  new Construction('Узел расцепления'),
  new Construction('Ходовая гайка с кронштейном'),
  new Construction('Защитный кожух'),
  new Construction('Клеммы подключения'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Максимальная длина створки, м', '3', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Максимальный вес створки, кг.', '500', null),
  new Specification('Мощность, Вт', '150', null),
  new Specification('Диапазон рабочих температур, °С', '-40...+55', null),
  new Specification('Скорость открывания, м/мин', '0,9', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '50', null),
];

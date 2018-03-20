import { Construction, Specification } from '../../../shared/idex';

export const Constructions: Construction[] = [
  new Construction('Нaкладка на кожух стрелы с логотипом'),
  new Construction('Болты с внутренним шестигранником'),
  new Construction('Кожух стрелы'),
  new Construction('Болты с внутренним шестигранником'),
  new Construction('Пластина крепления стрелы'),
  new Construction('Стрела от 4 до 6 м (опционально)'),
  new Construction('Стойка шлагбаума'),
  new Construction('Боковая крышка'),
  new Construction('Блок управления'),
  new Construction('Болты с внутренним шестигранником'),
  new Construction('Верхняя крышка корпуса'),
  new Construction('Светодиодная лампа'),
];

export const CharacteristicTechnical: Specification[] = [
  new Specification('Длина стрелы, м', '3, 4, 5, 6', null),
  new Specification('Напряжение питания, В', '220', null),
  new Specification('Мощность, Вт', '300', null),
  new Specification('Диапазон рабочих температур, °С', '-40...+55', null),
  new Specification('Максимальное время открывания/закрывания, сек', '6', null),
  new Specification('Класс защиты IP', '54', null),
  new Specification('Интенсивность использования, %', '70', null),
];

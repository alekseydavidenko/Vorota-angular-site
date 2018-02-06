import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '	1 000 - 3 000'),
  new Size('Ширина проема, мм', '	600 - 1 500'),
  new Size('Просвет, мм', '35 - 150'),
];

export const Constructions: Construction[] = [
  new Construction('Профиль окантовочный.'),
  new Construction('Соединение щита угловое.'),
  new Construction('Петля двухсекционная в сборе.'),
  new Construction('Профиль для сборки панелей.'),
  new Construction('Профиль основной несущий.'),
  new Construction('Профиль «крышка».'),
  new Construction('Профиль «корпус столба».'),
  new Construction('Сэндвич-панель.'),
  new Construction('Ручка алюминиевая.'),
];

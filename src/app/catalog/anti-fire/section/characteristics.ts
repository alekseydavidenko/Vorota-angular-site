import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '	2 000 - 6 000*'),
  new Size('Ширина проема, мм', '	2 000 - 6 000*'),
  new Size('Притолока, мм', 'от 650'),
  new Size('Пристенки, мм', 'от 300'),
  new Size('Глубина помещения, мм', 'высота проема + 600'),
  new Size('', '* Размеры от 5 000 мм по ширине и высоте требуют дополнительного согласования с конструктором.'),
];

export const Constructions: Construction[] = [
  new Construction('Направляющая для полотна ворот'),
  new Construction('Торсионный механизм'),
  new Construction('Вал'),
  new Construction('Верхний профиль'),
  new Construction('Боковая опора с роликом'),
  new Construction('Угловые стойки'),
  new Construction('Кронштейн крепления горизонтальных направляющих к потолку'),
  new Construction('Амортизатор'),
  new Construction('Устройство защиты от обрыва пружины'),
  new Construction('Барабан'),
  new Construction('Верхний уплотнитель'),
  new Construction('Петля'),
  new Construction('Полотно ворот из сэндвич-панелей'),
  new Construction('Боковая крышка'),
  new Construction('Кронштейн с устройством защиты от обрыва троса'),
  new Construction('Нижний профиль'),
  new Construction('Нижний уплотнитель'),
];

import { Construction, Size } from '../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '1 000 - 5 000'),
  new Size('Ширина проема, мм', '1 000 - 6 000'),
  new Size('Максимальная площадь полотна, м²', '20,5'),
  new Size('Притолока, мм', 'от 330 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 110 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Кронштейн консольный SR330, SR351'),
  new Construction('Суппорт с подшипником BSR30'),
  new Construction('Капсула регулируемая KPU10230'),
  new Construction('Вал октагональный RV102'),
  new Construction('Электропривод RS230, RS300'),
  new Construction('Направляющий профиль RG95S, RG110S'),
  new Construction('Концевой профиль RA75E, RA120E'),
  new Construction('Уплотнитель нижний UP4, UP6'),
  new Construction('Профиль полотна RHS75, RHS75P, RHS117/0,8, RHS117P/0,8'),
  new Construction('Уплотнитель боковой UP5, UP21'),
];

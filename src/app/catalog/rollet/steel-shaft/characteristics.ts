import { Construction, Size } from '../../../shared/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '2 000 - 6 300'),
  new Size('Ширина проема, мм', '2 000 - 11 800'),
  new Size('Максимальная площадь полотна, м²', '55'),
  new Size('Притолока, мм', 'от 650 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 500 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Кольцо стопорное RN30, RN40, RN55'),
  new Construction('Консоль SR425 (SR650)'),
  new Construction('Суппорт с подшипником BS30, BS40, BS55'),
  new Construction('Капсула регулируемая KPU10230, KPU159, KPU273-55'),
  new Construction('Вал RV102, RV159m, RV273m-55'),
  new Construction('Капсула регулируемая со шпонкой KPU10230S. KPU159S, KPU273S-55'),
  new Construction('Кронштейн крепления привода SR200'),
  new Construction('Направляющий профиль RG95S'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SLE117'),
  new Construction('Профиль (полотно) RHS117, RHS117P'),
  new Construction('Профиль концевой RA120E'),
  new Construction('Привод вальный'),
  new Construction('Уплотнитель нижний UP4, UP6'),
  new Construction('Уплотнитель боковой UP5'),
];

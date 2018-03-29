import { Construction, Size } from '../../../../shared/catalog/idex';

export const CharacteristicSize: Size[] = [
  new Size('Высота проема, мм', '500 - 5 000'),
  new Size('Ширина проема, мм', '400 - 4 000'),
  new Size('Максимальная площадь полотна, м²', '12.5'),
  new Size('Притолока, мм', 'от 137 (Накладной монтаж)'),
  new Size('Пристенки, мм', 'от 53 (Накладной монтаж)'),
];

export const Constructions: Construction[] = [
  new Construction('Крышка боковая RK137, RSK137, RK150, RK165, RK180, RK205, RK250S'),
  new Construction('Суппорт подшипника BS100, BS42'),
  new Construction('Направляющее устройство RU45'),
  new Construction('Подшипник BR28, BR42'),
  new Construction('Капсула универсальная KP40, KP60, KPU60, KPU70'),
  new Construction('Вал октагональный RV40, RV60-1, RV60, RV70'),
  new Construction('Кольцо ригельное RD40, RD60, RD70'),
  new Construction('Короб защитный RB137, RB150, RB165, RB180, RB205, RB250'),
  new Construction('Замок автоматический RM1'),
  new Construction('Электропривод внутривальный'),
  new Construction('Пластина крепления привода BU100K'),
  new Construction('Направляющий профиль RG53MS, RG53BN, RG62BS, RG64'),
  new Construction('Заглушка PB14'),
  new Construction('Замок боковой SLE45M'),
  new Construction('Профиль концевой RA45EN, RA45KN'),
  new Construction('Профиль (полотно) RHE45M'),
  new Construction('Выключатель с ключом SWM, SWK'),
  new Construction('Выключатель клавишный SWB, SWH'),
];

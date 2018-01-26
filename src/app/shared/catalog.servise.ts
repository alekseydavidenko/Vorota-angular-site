import { Injectable } from '@angular/core';

import { Catalog } from './catalog';

const catalog = [
  new Catalog(1, 'Секционные ворота', 'assets/img/catalog/section/section.jpg', 'section'),
  new Catalog(2, 'Уличные Ворота', 'assets/img/catalog/street/street.jpg', 'street'),
  new Catalog(3, 'Противопожарные ворота', 'assets/img/catalog/anti-fire/anti-fire.jpg', 'anti-fire'),
  new Catalog(4, 'Автоматика', 'assets/img/catalog/avtomatica/avtomatica.jpg', 'avtomatica'),
  new Catalog(5, 'Шлагбаумы, цепные барьеры', 'assets/img/catalog/barrier/barrier-logo.jpg', 'barrier'),
  new Catalog(6, 'Ролтставни, рольворота', 'assets/img/catalog/rollet/rollet.jpg', 'rollet'),
  new Catalog(7, 'Скоростные ворота', 'assets/img/catalog/speed-roll/speed-roll.jpg', 'speed-roll'),
  new Catalog(8, 'Перегрузочное оборудование', 'assets/img/catalog/transshipment/transshipment.jpg', 'transshipment'),
  new Catalog(9, 'Рампы, столы подьемные', 'assets/img/catalog/ramp-and-table/ramp-and-table.jpg', 'ramp-and-table'),
];
const catalogAntiFire = [
  new Catalog(1, 'Секционные ворота', 'assets/img/catalog/anti-fire/section.jpg', 'section'),
  new Catalog(2, 'Откатные ворота', 'assets/img/catalog/anti-fire/recoiling.jpg', 'recoiling'),
  new Catalog(3, 'Распашные ворота', 'assets/img/catalog/anti-fire/swinging.jpg', 'swinging'),
];
const catalogAvtomatic = [
  new Catalog(1, 'Секционные', 'assets/img/catalog/avtomatica/section.jpg', 'sections'),
  new Catalog(3, 'Откатное', 'assets/img/catalog/avtomatica/sliding.jpg', 'sliding'),
  new Catalog(4, 'Распашное', 'assets/img/catalog/avtomatica/swing.jpg', 'swing'),
  new Catalog(6, 'Аксессуары', 'assets/img/catalog/avtomatica/acsessuars.jpg', 'acsessuars'),
];
const catalogBarrier = [
  new Catalog(1, 'Шлагбаум', 'assets/img/catalog/barrier/barrier.jpg', 'barrier'),
  new Catalog(2, 'Цепроной барьер', 'assets/img/catalog/barrier/chain-barrier.jpg', 'chain-barrier'),
];
const catalogRollet = [
  new Catalog(1, 'Из алюминиевых профилей', 'assets/img/catalog/rollet/aluminium.jpg', 'aluminium'),
  new Catalog(2, 'Из стальных профилеей с внутривальным приводом', 'assets/img/catalog/rollet/steel.jpg', 'steel'),
  new Catalog(3, 'Из стальных профилеей с навальным приводом', 'assets/img/catalog/rollet/steel-shaft.jpg', 'steel-shaft'),
];
const catalogSections = [
  new Catalog(1, 'С пружинами растяжения стандартных размеров', 'assets/img/catalog/section/standart.jpg', 'standart'),
  new Catalog(2, 'С пружинами растяжения', 'assets/img/catalog/section/stretching.jpg', 'stretching'),
  new Catalog(3, 'С торсионным механизмом', 'assets/img/catalog/section/torsional.jpg', 'torsional'),
  new Catalog(4, 'Промышленые', 'assets/img/catalog/section/industrial.jpg', 'industrial'),
  new Catalog(5, 'Панорамные', 'assets/img/catalog/section/panorama.jpg', 'panorama'),
];
const catalogStreet = [
  new Catalog(1, 'Откатные ворота', 'assets/img/catalog/street/recoiling.jpg', 'recoiling'),
  new Catalog(2, 'Распашные ворота', 'assets/img/catalog/street/swinging.jpg', 'swinging'),
  new Catalog(3, 'Калитки', 'assets/img/catalog/street/wickets.jpg', 'wickets'),
];
const catalogSpeedRoll = [
  new Catalog(1, 'Для внутреннего использования', 'assets/img/catalog/speed-roll/inside.jpg', 'inside'),
  new Catalog(2, 'Для наружного использования', 'assets/img/catalog/speed-roll/outside.jpg', 'outside'),
  new Catalog(3, 'Для пещивой промышленности', 'assets/img/catalog/speed-roll/food.jpg', 'food'),
  new Catalog(4, 'Для морозильных камер', 'assets/img/catalog/speed-roll/cold.jpg', 'cold'),
  new Catalog(5, 'Для чистых помещений', 'assets/img/catalog/speed-roll/clean.jpg', 'clean'),
  new Catalog(6, 'Пленочные завесы', 'assets/img/catalog/speed-roll/film-veils.jpg', 'film-veils'),
  new Catalog(7, 'Пленочные распашные', 'assets/img/catalog/speed-roll/film-swinging.jpg', 'film-swinging'),
];
const catalogTransshipment = [
  new Catalog(1, 'Платформа с поворотной апперелью', 'assets/img/catalog/transshipment/platform-swing-out.jpg', 'platform-swing-out'),
  new Catalog(2, 'Платформа с выдвижной аппарелью', 'assets/img/catalog/transshipment/platform-telescopic-lip.jpg', 'platform-telescopic-lip'),
  new Catalog(3, 'Платформа механическая', 'assets/img/catalog/transshipment/platform-mechanical.jpg', 'platform-mechanical'),
  new Catalog(4, 'Платформа консольного типа', 'assets/img/catalog/transshipment/platform-console-type.jpg', 'platform-console-type'),
  new Catalog(5, 'Платформа механическая "Минидок"', 'assets/img/catalog/transshipment/platform-mechanical-minidock.jpg', 'platform-mechanical-minidock'),
  new Catalog(6, 'Герметизатор со складной рамой', 'assets/img/catalog/transshipment/hermetic-folding-frame.jpg', 'hermetic-folding-frame'),
  new Catalog(7, 'Герметизатор с жесткой рамой', 'assets/img/catalog/transshipment/hermetic-rigid-frame.jpg', 'hermetic-rigid-frame'),
  new Catalog(8, 'Герметизатор надувной', 'assets/img/catalog/transshipment/hermetic-inflatable.jpg', 'hermetic-inflatable'),
  new Catalog(9, 'Герметизатор подушечный', 'assets/img/catalog/transshipment/hermetic-cushion.jpg', 'hermetic-cushion'),
  new Catalog(10, 'Тамбур стандартный', 'assets/img/catalog/transshipment/tambour-overload-standard.jpg', 'tambour-overload-standard'),
  new Catalog(11, 'Тамбур легкой серии', 'assets/img/catalog/transshipment/tambour-overload-light-series.jpg', 'tambour-overload-light-series'),
  new Catalog(12, 'Ферма выносная', 'assets/img/catalog/transshipment/farm-remote.jpg', 'farm-remote'),
  new Catalog(13, 'Мост откидной, скользящий', 'assets/img/catalog/transshipment/bridge-folding-sliding.jpg', 'bridge-folding-sliding'),
  new Catalog(14, 'Мост переносной', 'assets/img/catalog/transshipment/bridge-portable.jpg', 'bridge-portable'),
];
const catalogRampEndTable = [
  new Catalog(1, 'С опорой на кузов автомобиля', 'assets/img/catalog/ramp-and-table/with-support.jpg', 'with-support'),
  new Catalog(2, 'Без опоры на кузов автомобиля', 'assets/img/catalog/ramp-and-table/without-support.jpg', 'without-support'),
  new Catalog(3, 'С трех сторонней загрузкой', 'assets/img/catalog/ramp-and-table/with-three-way-download.jpg', 'with-three-way-download'),
  new Catalog(4, 'Укороченая', 'assets/img/catalog/ramp-and-table/shortened.jpg', 'shortened'),
  new Catalog(5, 'С одной парой ножниц', 'assets/img/catalog/ramp-and-table/one-pair-scissors.jpg', 'one-pair-scissors'),
  new Catalog(6, 'С двумя парами ножниц', 'assets/img/catalog/ramp-and-table/two-pair-scissors.jpg', 'two-pair-scissors'),
  new Catalog(7, 'С тремя парами ножниц', 'assets/img/catalog/ramp-and-table/three-pair-scissors.jpg', 'three-pair-scissors'),
  new Catalog(8, 'Составной', 'assets/img/catalog/ramp-and-table/composite.jpg', 'composite'),
];

const catalogPromise = Promise.resolve(catalog);
const catalogAntiFirePromise = Promise.resolve(catalogAntiFire);
const catalogAvtomaticPromise = Promise.resolve(catalogAvtomatic);
const catalogBarrierPromise = Promise.resolve(catalogBarrier);
const catalogRolletPromise = Promise.resolve(catalogRollet);
const catalogSectionsPromise = Promise.resolve(catalogSections);
const catalogStreetPromise = Promise.resolve(catalogStreet);
const catalogSpeedRollPromise = Promise.resolve(catalogSpeedRoll);
const catalogTransshipmentPromise = Promise.resolve(catalogTransshipment);
const catalogRampEndTablePromise = Promise.resolve(catalogRampEndTable);

@Injectable()
export class CatalogServise {
  getCatalog(): Promise<Catalog[]> {
    return catalogPromise;
  }
  getCatalogAntiFire(): Promise<Catalog[]> {
    return catalogAntiFirePromise;
  }
  getCatalogAvtomatic(): Promise<Catalog[]> {
    return catalogAvtomaticPromise;
  }
  getCatalogBarrier(): Promise<Catalog[]> {
    return catalogBarrierPromise;
  }
  getCatalogRollet(): Promise<Catalog[]> {
    return catalogRolletPromise;
  }
  getCatalogSections(): Promise<Catalog[]> {
    return catalogSectionsPromise;
  }
  getCatalogStreet(): Promise<Catalog[]> {
    return catalogStreetPromise;
  }
  getCatalogSpeedRoll(): Promise<Catalog[]> {
    return catalogSpeedRollPromise;
  }
  getCatalogTransshipment(): Promise<Catalog[]> {
    return catalogTransshipmentPromise;
  }
  getCatalogRampEndTable(): Promise<Catalog[]> {
    return catalogRampEndTablePromise;
  }
}

import { Injectable } from '@angular/core';

import { Catalog } from './catalog';

const catalog = [
  new Catalog(1, 'Секционные ворота', 'assets/img/catalog/section.jpg', 'section'),
  new Catalog(2, 'Уличные Ворота', 'assets/img/catalog/street.jpg', 'street'),
  new Catalog(3, 'Противопожарные ворота', 'assets/img/catalog/anti-fire.jpg', 'anti-fire'),
  new Catalog(4, 'Автоматика', 'assets/img/catalog/avtomatica.jpg', 'avtomatica'),
  new Catalog(5, 'Шлагбаумы, цепные барьеры', 'assets/img/catalog/barrier.jpg', 'barrier'),
  new Catalog(6, 'Ролтставни, рольворота', 'assets/img/catalog/rollet.jpg', 'rollet'),
  new Catalog(7, 'Скоростные ворота', 'assets/img/catalog/speed-roll.jpg', 'speed-roll'),
  new Catalog(8, 'Перегрузочное оборудование', 'assets/img/catalog/transshipment.jpg', 'transshipment'),
  new Catalog(9, 'Рампы, столы подьемные', 'assets/img/catalog/ramp-and-table.jpg', 'ramp-and-table'),
];
const catalogAntiFire = [
  new Catalog(1, 'Секционные ворота', 'assets/img/catalog/anti-fire-section.jpg', 'section'),
  new Catalog(2, 'Откатные ворота', 'assets/img/catalog/anti-fire-recoiling.jpg', 'recoiling'),
  new Catalog(3, 'Распашные ворота', 'assets/img/catalog/anti-fire-swinging.jpg', 'swinging'),
];
const catalogAvtomatic = [
  new Catalog(1, 'Секционные', 'assets/img/catalog/avtomatica-section.jpg', 'sections'),
  new Catalog(3, 'Откатное', 'assets/img/catalog/avtomatica-sliding.jpg', 'sliding'),
  new Catalog(4, 'Распашное', 'assets/img/catalog/avtomatica-swing.jpg', 'swing'),
  new Catalog(6, 'Аксессуары', 'assets/img/catalog/avtomatica-acsessuars.jpg', 'acsessuars'),
];
const catalogBarrier = [
  new Catalog(1, 'Шлагбаум', 'assets/img/catalog/barrier-barrier.jpg', 'barrier'),
  new Catalog(2, 'Цепроной барьер', 'assets/img/catalog/barrier-chain-barrier.jpg', 'chain-barrier'),
];
const catalogRollet = [
  new Catalog(1, 'Из алюминиевых профилей', 'assets/img/catalog/rollet-aluminium.jpg', 'rollet-aluminium'),
  new Catalog(2, 'Из стальных профилеей с внутривальным приводом', 'assets/img/catalog/rollet-steel.jpg', 'rollet-steel'),
  new Catalog(3, 'Из стальных профилеей с навальным приводом', 'assets/img/catalog/rollet-steel-shaft.jpg', 'rollet-steel-shaft'),
];

const catalogPromise = Promise.resolve(catalog);
const catalogAntiFirePromise = Promise.resolve(catalogAntiFire);
const catalogAvtomaticPromise = Promise.resolve(catalogAvtomatic);
const catalogBarrierPromise = Promise.resolve(catalogBarrier);
const catalogRolletPromise = Promise.resolve(catalogRollet);

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
}

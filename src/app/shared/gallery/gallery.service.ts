import { Injectable } from '@angular/core';

import { Photo } from './photo';

const gallery: Photo[] = [
  new Photo('assets/img/gallery/01.jpg', null),
  new Photo('assets/img/gallery/02.jpg', null),
  new Photo('assets/img/gallery/03.jpg', null),
  new Photo('assets/img/gallery/04.jpg', null),
  new Photo('assets/img/gallery/05.jpg', null),
  new Photo('assets/img/gallery/06.jpg', null),
  new Photo('assets/img/gallery/07.jpg', null),
];

const galleryPromise = Promise.resolve(gallery);

@Injectable()
export class GalleryService {
  public getGallery(): Promise<Photo[]> {
    return galleryPromise;
  }
}

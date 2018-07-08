import { Component, OnInit, TemplateRef, Inject, forwardRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Photo } from '../shared/gallery/photo';

import { GalleryService } from '../shared/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: Photo[];
  public selectedImage: Photo;

  // tslint:disable-next-line:member-ordering
  public modalRef: BsModalRef;

  constructor(
    @Inject(forwardRef(() => BsModalService))
    private modalService: BsModalService,
    @Inject(forwardRef(() => GalleryService))
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.galleryService.getGallery().then(result => this.images = result);
  }

  navigate(forward) {
    const index = this.images.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.images.length) {
      this.selectedImage = this.images[index];
    } else if (index < 0) {
      this.selectedImage = this.images[this.images.length - 1];
    } else {
      this.selectedImage = this.images[0];
    }
  }

  openModal(template: TemplateRef<any>, image) {
    this.selectedImage = image;
    this.modalRef = this.modalService.show(template);
  }

}

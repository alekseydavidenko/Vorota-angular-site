import { Component, OnInit, TemplateRef, Inject, forwardRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-fead-back',
  templateUrl: './modal-fead-back.component.html',
  styleUrls: ['./modal-fead-back.component.css']
})
export class ModalFeadBackComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(
    @Inject(forwardRef(() => BsModalService))
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

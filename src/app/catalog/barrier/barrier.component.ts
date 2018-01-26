import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../../shared/catalog.servise';
import { Catalog } from '../../shared/catalog';

@Component({
  selector: 'app-barrier',
  templateUrl: './barrier.component.html',
  styleUrls: ['./barrier.component.css']
})
export class BarrierComponent implements OnInit {

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise,
    private catalogBarrier: Catalog[]
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalogBarrier().then(result => this.catalogBarrier = result);
  }
  onSelect(selected: Catalog) {
    // this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

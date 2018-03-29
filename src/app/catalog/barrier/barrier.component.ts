import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../shared/catalog/catalog.service';
import { Catalog } from '../../shared/catalog/catalog';

@Component({
  selector: 'app-barrier',
  templateUrl: './barrier.component.html',
  styleUrls: ['./barrier.component.css']
})
export class BarrierComponent implements OnInit {

  public catalogBarrier: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogBarrier().then(result => this.catalogBarrier = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

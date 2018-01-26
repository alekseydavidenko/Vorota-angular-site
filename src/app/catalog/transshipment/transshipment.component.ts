import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../../shared/catalog.servise';
import { Catalog } from '../../shared/catalog';

@Component({
  selector: 'app-transshipment',
  templateUrl: './transshipment.component.html',
  styleUrls: ['./transshipment.component.css']
})
export class TransshipmentComponent implements OnInit {

  public catalogTransshipment: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalogTransshipment().then(result => this.catalogTransshipment = result);
  }
  onSelect(selected: Catalog) {
    // this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

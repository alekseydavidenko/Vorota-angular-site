import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../shared/catalog.servise';
import { Catalog } from '../shared/catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalog: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalog().then(result => this.catalog = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }

}

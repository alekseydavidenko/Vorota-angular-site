import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../../shared/catalog.servise';
import { Catalog } from '../../shared/catalog';

@Component({
  selector: 'app-anti-fire',
  templateUrl: './anti-fire.component.html',
  styleUrls: ['./anti-fire.component.css']
})
export class AntiFireComponent implements OnInit {

  catalogAntiFire: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalogAntiFire().then(result => this.catalogAntiFire = result);
  }
  onSelect(selected: Catalog) {
    // this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

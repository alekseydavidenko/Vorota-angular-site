import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../../shared/catalog.servise';
import { Catalog } from '../../shared/catalog';

@Component({
  selector: 'app-avtomatica',
  templateUrl: './avtomatica.component.html',
  styleUrls: ['./avtomatica.component.css']
})
export class AvtomaticaComponent implements OnInit {

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise,
    private catalogAvtomatic: Catalog[]
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalogAvtomatic().then(result => this.catalogAvtomatic = result);
  }
  onSelect(selected: Catalog) {
    // this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../shared/catalog/catalog.service';
import { Catalog } from '../../shared/catalog/catalog';


@Component({
  selector: 'app-rollet',
  templateUrl: './rollet.component.html',
  styleUrls: ['./rollet.component.css']
})
export class RolletComponent implements OnInit {

  public catalogRollet: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogRollet().then(result => this.catalogRollet = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

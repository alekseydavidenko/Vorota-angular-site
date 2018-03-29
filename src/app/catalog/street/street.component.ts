import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../shared/catalog/catalog.service';
import { Catalog } from '../../shared/catalog/catalog';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  public catalogStreet: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogStreet().then(result => this.catalogStreet = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../shared/catalog/catalog.service';
import { Catalog } from '../../shared/catalog/catalog';

@Component({
  selector: 'app-ramp-and-table',
  templateUrl: './ramp-and-table.component.html',
  styleUrls: ['./ramp-and-table.component.css']
})
export class RampAndTableComponent implements OnInit {

  public catalogRampEndTable: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogRampEndTable().then(result => this.catalogRampEndTable = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

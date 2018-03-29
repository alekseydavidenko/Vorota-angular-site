import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { Catalog } from '../../../shared/catalog/catalog';

@Component({
  selector: 'app-aluminium',
  templateUrl: './aluminium.component.html',
  styleUrls: ['./aluminium.component.css']
})
export class AluminiumComponent implements OnInit {

  public catalogRolletAluminium: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogRolletAluminium().then(result => this.catalogRolletAluminium = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }

}

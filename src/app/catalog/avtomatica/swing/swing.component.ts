import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../../shared/catalog/catalog.service';
import { Catalog } from '../../../shared/catalog/catalog';

@Component({
  selector: 'app-swing',
  templateUrl: './swing.component.html',
  styleUrls: ['./swing.component.css']
})
export class SwingComponent implements OnInit {

  public catalogAvtomaticSwing: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogService))
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getCatalogAvtomaticSwing().then(result => this.catalogAvtomaticSwing = result);
  }
  onSelect(selected: Catalog) {
    this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

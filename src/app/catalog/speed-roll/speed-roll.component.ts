import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogServise } from '../../shared/catalog.servise';
import { Catalog } from '../../shared/catalog';

@Component({
  selector: 'app-speed-roll',
  templateUrl: './speed-roll.component.html',
  styleUrls: ['./speed-roll.component.css']
})
export class SpeedRollComponent implements OnInit {

  public catalogSpeedRoll: Catalog[];

  constructor(
    @Inject(forwardRef(() => Router))
    private router: Router,
    @Inject(forwardRef(() => ActivatedRoute))
    private activatedRouter: ActivatedRoute,
    @Inject(forwardRef(() => CatalogServise))
    private catalogServise: CatalogServise
  ) { }

  ngOnInit() {
    this.catalogServise.getCatalogSpeedRoll().then(result => this.catalogSpeedRoll = result);
  }
  onSelect(selected: Catalog) {
    // this.router.navigate([selected.rLink], { relativeTo: this.activatedRouter });
  }
}

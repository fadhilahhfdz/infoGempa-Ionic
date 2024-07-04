import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-dirasakan',
  templateUrl: './detail-dirasakan.page.html',
  styleUrls: ['./detail-dirasakan.page.scss'],
})
export class DetailDirasakanPage {
  gempa: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['special']) {
        this.gempa = JSON.parse(params['special']);
      }
    });
  }
}

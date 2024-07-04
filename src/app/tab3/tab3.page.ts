import { Component, OnInit } from '@angular/core';
import { InfoGempaService } from '../services/info-gempa.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public dirasakan: any = {};
  public gempa: any;

  constructor(private infoGempaService: InfoGempaService, private route: Router) {}

  ngOnInit(): void {
    this.infoGempaService.getGempaDirasakan().subscribe((result) => {
      this.dirasakan = result;
      this.gempa = result.Infogempa.gempa;
      console.log(this.dirasakan);
    });
  }

  detailpage(g: any): void {
    let gempa = {
      Magnitude: g.Magnitude,
      Tanggal: g.Tanggal,
      Jam: g.Jam,
      Wilayah: g.Wilayah,
      Kedalaman: g.Kedalaman,
      Dirasakan: g.Dirasakan,
    };
    let extras: NavigationExtras = {
      queryParams: {
        ['special']: JSON.stringify(gempa),
      },
    };
    this.route.navigate(['/detail-dirasakan'], extras);
  }
}

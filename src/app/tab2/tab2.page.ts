import { Component, OnInit } from '@angular/core';
import { InfoGempaService } from '../services/info-gempa.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public terkini: any = {};
  public gempa: any;

  constructor(
    private infoGempaService: InfoGempaService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.infoGempaService.getGempaTerkini().subscribe((result) => {
      this.terkini = result;
      this.gempa = result.Infogempa.gempa;
      console.log(this.terkini);
    });
  }

  detailpage(g: any): void {
    let gempa = {
      Magnitude: g.Magnitude,
      Tanggal: g.Tanggal,
      Jam: g.Jam,
      Wilayah: g.Wilayah,
      Potensi: g.Potensi,
      Kedalaman: g.Kedalaman,
    };
    let extras: NavigationExtras = {
      queryParams: {
        ['special']: JSON.stringify(gempa),
      },
    };
    this.route.navigate(['/detail'], extras);
  }
}

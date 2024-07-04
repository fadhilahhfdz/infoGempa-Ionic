import { Component, OnInit } from '@angular/core';
import { InfoGempaService } from '../services/info-gempa.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public gempa: any ={};
  public shakemap = "";
  public magnitude = "";
  public tanggal = "";
  public jam = "";
  public wilayah = "";
  public potensi = "";
  public kedalaman = "";
  public dirasakan = "";

  constructor(private infoGempaService: InfoGempaService) {}

  ngOnInit(): void {
      this.infoGempaService.getDataGempa().subscribe((result) => {
        this.gempa = result;
        this.shakemap = result.Infogempa.gempa.Shakemap;
        this.magnitude = result.Infogempa.gempa.Magnitude;
        this.tanggal = result.Infogempa.gempa.Tanggal;
        this.jam = result.Infogempa.gempa.Jam;
        this.wilayah = result.Infogempa.gempa.Wilayah;
        this.potensi = result.Infogempa.gempa.Potensi;
        this.kedalaman = result.Infogempa.gempa.Kedalaman;
        this.dirasakan = result.Infogempa.gempa.Dirasakan;
        console.log(this.gempa)
      })
  }
}

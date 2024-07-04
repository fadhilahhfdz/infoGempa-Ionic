import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailDirasakanPageRoutingModule } from './detail-dirasakan-routing.module';

import { DetailDirasakanPage } from './detail-dirasakan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDirasakanPageRoutingModule
  ],
  declarations: [DetailDirasakanPage]
})
export class DetailDirasakanPageModule {}

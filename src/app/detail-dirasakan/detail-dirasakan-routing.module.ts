import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailDirasakanPage } from './detail-dirasakan.page';

const routes: Routes = [
  {
    path: '',
    component: DetailDirasakanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailDirasakanPageRoutingModule {}

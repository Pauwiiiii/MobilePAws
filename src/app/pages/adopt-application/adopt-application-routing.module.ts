import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptApplicationPage } from './adopt-application.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptApplicationPageRoutingModule {}

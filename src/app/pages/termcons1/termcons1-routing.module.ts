import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Termcons1Page } from './termcons1.page';

const routes: Routes = [
  {
    path: '',
    component: Termcons1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Termcons1PageRoutingModule {}

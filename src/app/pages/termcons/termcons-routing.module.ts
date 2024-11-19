import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermconsPage } from './termcons.page';

const routes: Routes = [
  {
    path: '',
    component: TermconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermconsPageRoutingModule {}

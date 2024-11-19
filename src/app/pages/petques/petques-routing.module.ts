import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetquesPage } from './petques.page';

const routes: Routes = [
  {
    path: '',
    component: PetquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetquesPageRoutingModule {}
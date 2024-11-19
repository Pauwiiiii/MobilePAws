import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetquesintroPage } from './petquesintro.page';

const routes: Routes = [
  {
    path: '',
    component: PetquesintroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetquesintroPageRoutingModule {}
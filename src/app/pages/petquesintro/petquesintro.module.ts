import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetquesintroPageRoutingModule } from './petquesintro-routing.module';

import { PetquesintroPage } from './petquesintro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetquesintroPageRoutingModule
  ],
  declarations: [PetquesintroPage]
})
export class PetquesintroPageModule {}

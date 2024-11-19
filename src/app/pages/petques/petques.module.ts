import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetquesPageRoutingModule } from './petques-routing.module';

import { PetquesPage } from './petques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetquesPageRoutingModule
  ],
  declarations: [PetquesPage]
})
export class PetquesPageModule {}

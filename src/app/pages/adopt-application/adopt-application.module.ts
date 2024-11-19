import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptApplicationPageRoutingModule } from './adopt-application-routing.module';

import { AdoptApplicationPage } from './adopt-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptApplicationPageRoutingModule
  ],
  declarations: [AdoptApplicationPage]
})
export class AdoptApplicationPageModule {}

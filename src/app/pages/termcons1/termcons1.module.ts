import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Termcons1PageRoutingModule } from './termcons1-routing.module';

import { Termcons1Page } from './termcons1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Termcons1PageRoutingModule
  ],
  declarations: [Termcons1Page]
})
export class Termcons1PageModule {}

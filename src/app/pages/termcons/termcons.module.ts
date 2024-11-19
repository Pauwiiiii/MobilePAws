import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermconsPageRoutingModule } from './termcons-routing.module';

import { TermconsPage } from './termcons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermconsPageRoutingModule
  ],
  declarations: [TermconsPage]
})
export class TermconsPageModule {}

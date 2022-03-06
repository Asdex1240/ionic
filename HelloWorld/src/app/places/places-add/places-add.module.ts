import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesAddPageRoutingModule } from './places-add-routing.module';

import { PlacesAddPage } from './places-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesAddPageRoutingModule
  ],
  declarations: [PlacesAddPage]
})
export class PlacesAddPageModule {}

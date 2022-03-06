import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesAddPage } from './places-add.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesAddPageRoutingModule {}

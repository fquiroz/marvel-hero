import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailHeroComponent } from './detail-hero.component';

const routes: Routes = [
  {
    path: '',
    component: DetailHeroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListPage } from './hero-list.page';
import { ValidRouteGuard } from 'src/app/shared/guard/valid-route.guard';

const routes: Routes = [
  {
    path: 'hero-list',
    component: HeroListPage,
  },
  {
    path: 'detail',
    canActivate: [ValidRouteGuard],
    loadChildren: () =>
      import('../detail-hero/detail-hero.module').then(
        (m) => m.DetailHeroModule
      ),
  },
  {
    path: '',
    redirectTo: 'hero-list',
    pathMatch: 'full',
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HeroListPageRoutingModule {}

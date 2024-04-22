import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NetworkErrorComponent } from './components/network-error/network-error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/hero-list/hero-list.module').then(m => m.HeroListPageModule)
  },{
    path:'network',
    component:NetworkErrorComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

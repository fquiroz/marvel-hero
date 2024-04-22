import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { HeroListPage } from './hero-list.page';
import { HeroListPageRoutingModule } from './hero-list-routing.module';
import { HeroesCapacitorService } from 'src/app/services/heroes/heroes-capacitor.service';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeroListPageRoutingModule,
    RouterModule
  ],
  declarations: [HeroListPage],
  providers: [
    {
      provide: 'IHeroesService',
      useClass: HeroesCapacitorService,
    }
  ],
  
})
export class HeroListPageModule {}

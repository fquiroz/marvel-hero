import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Subscription, finalize } from 'rxjs';
import { ErrorHandlerService } from 'src/app/services/errors/error-handler-service.service';
import { Thumbnail } from 'src/app/shared/interfaces/heroes-marvel-api';
import { IHeroesService } from 'src/app/shared/interfaces/heroes-service';
import {
  DtoHeroesResponse,
  DtoResponseHero,
} from 'src/app/shared/interfaces/marvel-dto';

@Component({
  selector: 'app-hero-list',
  templateUrl: 'hero-list.page.html',
  styleUrls: ['hero-list.page.scss'],
})
export class HeroListPage implements OnInit, OnDestroy {
  
  /** 
   * We can implement HeroesCapacitorService or HeroesService , in this case apply HeroesCapacitorService
   * */ 
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private errorHandler: ErrorHandlerService,
    @Inject('IHeroesService') private readonly service: IHeroesService
  ) {}


  // Declare Variables
  subscriptions: Subscription[] = [];
  heroesResults!: DtoHeroesResponse;
  //heroesResult$ = this.heroesService.getHeroes(20);


  ngOnInit(): void {
    this.getHeroes();
  }



  /**
   * The function `getHeroes` asynchronously fetches a list of heroes with a loading indicator.
   */
  async getHeroes() {
    const loading = await this.initLoading();

    this.subscriptions.push(
      this.service
        .getHeroes(20)
        .pipe(
          finalize(() => {
            loading.dismiss();
          })
        )
        .subscribe({
          next: (data) => {
            this.heroesResults = data;
          },
          error: (err: any) => this.errorHandler.handle(err),
        })
    );
  }

  /**
   * ---------------------------------------------------------------
   * FUNCTIONS
   * ---------------------------------------------------------------
   */

  resolveImage(thumbnail: Thumbnail) {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  async initLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000,
    });

    loading.present();
    return loading;
  }

  /**
   * The function `goToDetailPage` navigates to a detail page with the provided `DtoResponseHero` data.
   * @param {DtoResponseHero} detail - The `detail` parameter in the `goToDetailPage` function is of type
   * `DtoResponseHero`. It is likely an object that contains information about a hero, such as their
   * name, abilities, or other details. When the function is called, it logs the `detail` object to the
   * console
   */

  goToDetailPage(detail: DtoResponseHero) {
    console.log('😎 --> goToDetail', detail);
    this.router.navigate(['detail'], { state: detail });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

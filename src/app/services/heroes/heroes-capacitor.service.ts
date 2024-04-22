import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { Platform } from '@ionic/angular';
import { Http, HttpResponse } from '@capacitor-community/http';
import { API_KEY, environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { IHeroesService } from 'src/app/shared/interfaces/heroes-service';
import { DtoHeroesResponse } from 'src/app/shared/interfaces/marvel-dto';
import { adaptResponseMarvelToDto } from 'src/app/shared/adapters/adapters-marvel-dto';


@Injectable({
  providedIn: 'root',
})
export class HeroesCapacitorService implements IHeroesService {
  constructor(private platform: Platform) {}

  /**
   * The function `getHeroes` retrieves a list of heroes from the Marvel API based on the specified
   * limit.
   * @param {number} limit - The `limit` parameter in the `getHeroes` function specifies the maximum
   * number of heroes to retrieve from the Marvel API. This parameter controls how many hero entries
   * will be included in the response.
   * @returns The `getHeroes` function returns an Observable of type `DtoHeroesResponse`. It makes an
   * HTTP GET request to the Marvel API with a specified limit and API key, then maps the response data
   * to a DTO (Data Transfer Object) using the `adaptResponseMarvelToDto` function.
   */
  getHeroes(limit: number): Observable<DtoHeroesResponse> {
    console.log( ' 🚀 implementando Capacitor Plugin service...');
    return from(
      Http.request({
        url: `${environment.MARVEL_API}?limit=${limit}&apikey=${API_KEY}`,
        method: 'GET',
      })
    ).pipe(map((value) => adaptResponseMarvelToDto(value.data)));
  }
}

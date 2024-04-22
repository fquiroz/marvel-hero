import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { adaptResponseMarvelToDto } from 'src/app/shared/adapters/adapters-marvel-dto';
import { HeroesResponse } from 'src/app/shared/interfaces/heroes-marvel-api';
import { IHeroesService } from 'src/app/shared/interfaces/heroes-service';
import { DtoHeroesResponse } from 'src/app/shared/interfaces/marvel-dto';

import { API_KEY, environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class HeroesService implements IHeroesService {
  constructor(private http: HttpClient) {}

/**
 * The function `getHeroes` makes an HTTP GET request to a Marvel API endpoint with a specified limit
 * and API key, then maps and adapts the response to a DTO format.
 * @param {number} limit - The `limit` parameter in the `getHeroes` function specifies the maximum
 * number of heroes to retrieve from the Marvel API. This parameter controls the number of heroes that
 * will be included in the response.
 * @returns The `getHeroes` function returns an Observable of type `DtoHeroesResponse`. It makes an
 * HTTP GET request to the Marvel API with a specified limit and API key, then maps the response using
 * the `adaptResponseMarvelToDto` function before returning it as an Observable.
 */
  getHeroes(limit:number):Observable<DtoHeroesResponse> {
    console.log(' 🚀 implementando HttpClient Angular service...');
    return this.http
      .get<HeroesResponse>(`${environment.MARVEL_API}?limit=${limit}&apikey=${API_KEY}`)
      .pipe(
        map((value) => adaptResponseMarvelToDto(value)));
  }


}

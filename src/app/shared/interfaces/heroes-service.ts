import { Observable } from "rxjs";
import { DtoHeroesResponse } from "./marvel-dto";



export interface IHeroesService {
    getHeroes(limit:number):Observable<DtoHeroesResponse>
}
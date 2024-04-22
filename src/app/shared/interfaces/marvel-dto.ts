import { Thumbnail } from "./heroes-marvel-api"

export interface DtoHeroesResponse {
    code: number
    status: string
    pagination: Pagination
    results: DtoResponseHero[]
  }

  export interface Pagination {
    offset: number
    limit: number
    total: number
    count: number
  }

  export interface DtoResponseHero {
    id: number
    name: string
    description: string
    thumbnail: Thumbnail
    comicObj: ComomDataDto
    seriesObj: ComomDataDto
    storiesObj: ComomDataDto
  }

  export interface ComomDataDto {
    available: number
    items: DtoItem[]
    returned: number
  } 

  export interface DtoItem {
    resourceURI: string
    name: string
    type: string
  }

 

    
  





  
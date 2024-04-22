import { Comics, HeroesResponse, ResultHero } from '../interfaces/heroes-marvel-api';
import { ComomDataDto, DtoHeroesResponse, DtoResponseHero } from '../interfaces/marvel-dto';

/**
 * The function `adaptResponseMarvelToDto` transforms a response from the Marvel API into a DTO format
 * for heroes.
 * @param {HeroesResponse} value - The `adaptResponseMarvelToDto` function takes in a parameter `value`
 * of type `HeroesResponse`. This parameter likely contains information about heroes retrieved from a
 * Marvel API, including properties such as `code`, `status`, and `data` which contains details like
 * `offset`, `limit`, `
 * @returns The function `adaptResponseMarvelToDto` is returning a DTO (Data Transfer Object)
 * representing the response from the Marvel API. The DTO includes the response code, status,
 * pagination information (offset, limit, total, count), and an array of adapted hero results.
 */
export const adaptResponseMarvelToDto = (value: HeroesResponse) => {
  const {
    code,
    status,
    data: { offset, limit, total, count, results },
  } = value;

 
  let responseDto: DtoHeroesResponse = {
    code,
    status,
    pagination: { offset, limit, total, count },
    results : adaptResultsHeroDto(results)
  };
  return responseDto;
};

/**
 * The function `adaptResultsHeroDto` takes an array of `ResultHero` objects, extracts specific
 * properties, and returns an array of `DtoResponseHero` objects with adapted properties.
 * @param {ResultHero[]} results - The `results` parameter is an array of objects of type `ResultHero`.
 * Each object in the array represents a hero and contains properties such as `id`, `name`,
 * `description`, `thumbnail`, `comics`, `stories`, and `series`. The function `adaptResultsHeroDto`
 * @returns The function `adaptResultsHeroDto` is returning an array of objects of type
 * `DtoResponseHero`. Each object contains properties such as `id`, `name`, `description`, `thumbnail`,
 * `comicObj`, `seriesObj`, and `storiesObj`. The `comicObj`, `seriesObj`, and `storiesObj` properties
 * are the result of calling other functions (`adapComicDto`,
 */
export const adaptResultsHeroDto = (results: ResultHero[]) => {

  let responseResults: DtoResponseHero[] = [];

  results.map((result: ResultHero) => {
    const { id, name, description, thumbnail, comics, stories, series } = result;

    responseResults.push({
      id,
      name,
      description,
      thumbnail,
      comicObj: adapComicDto(comics),
      seriesObj: adaptSeriesDto(series),
      storiesObj: adaptStoriesDto(stories),
    });
  });
  return responseResults;
}

/**
 * The function adapComicDto takes a Comics object as input and returns a ComomDataDto object with
 * selected properties.
 * @param {Comics} value - The `value` parameter in the `adapComicDto` function is of type `Comics`. It
 * seems like the function is extracting specific properties from the `Comics` object and returning
 * them as a new object of type `ComomDataDto`.
 * @returns The function `adapComicDto` is returning an object with three properties: `available`,
 * `items`, and `returned`, taken from the `Comics` object passed as the `value` parameter. The return
 * type is specified as `ComomDataDto`.
 */
export const adapComicDto = (value: Comics) => {
  return {
    available: value.available,
    items: value.items,
    returned: value.returned,
  }as ComomDataDto;
};

/**
 * The function `adaptSeriesDto` takes a `Comics` object as input and returns a new object with
 * selected properties, casting it as `ComomDataDto`.
 * @param {Comics} value - The `value` parameter in the `adaptSeriesDto` function seems to be of type
 * `Comics`. It appears to have properties such as `available`, `items`, and `returned`. The function
 * is extracting these properties from the `Comics` object and returning them as a new object of
 * @returns The function `adaptSeriesDto` is returning an object with three properties: `available`,
 * `items`, and `returned`, which are taken from the `Comics` object passed as the `value` parameter.
 * The return type is specified as `ComomDataDto`.
 */
export const adaptSeriesDto = (value: Comics) => {
    return {
      available: value.available,
      items: value.items,
      returned: value.returned,
    }as ComomDataDto;;
  };


/**
 * The function `adaptStoriesDto` takes a `Comics` object as input and returns a `ComomDataDto` object
 * with specific properties.
 * @param {Comics} value - The `value` parameter in the `adaptStoriesDto` function is of type `Comics`.
 * It seems like the function is extracting specific properties from the `Comics` object and returning
 * them as a new object of type `ComomDataDto`.
 * @returns The function `adaptStoriesDto` is returning an object with the properties `available`,
 * `items`, and `returned` from the input parameter `value`, which is of type `Comics`. The returned
 * object is then casted as `ComomDataDto`.
 */
export const adaptStoriesDto = (value: Comics) => {
    return {
      available: value.available,
      items: value.items,
      returned: value.returned,
    } as ComomDataDto;
};


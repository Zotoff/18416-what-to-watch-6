import {Genres} from "../constants/constants";

export const makeNewStateValue = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const getFilmsGenres = (films) => {
  const filmsGenres = new Set(films.map((film) => film.genre));
  return [Genres.ALL_GENRES, ...filmsGenres];
};

export const getFilmsByGenre = (filmsList, activeGenre) => {
  switch (activeGenre) {
    case activeGenre:
      return filmsList.filter((film) => {
        return film.genre === activeGenre;
      });
    default:
      return filmsList;
  }
};

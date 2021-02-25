import {Genres} from "../constants/constants";

export const selectFilmsFromState = (state) => {
  if (state.activeGenre !== Genres.ALL_GENRES) {
    return state.films.filter((film) => film.genre === state.activeGenre);
  }
  return state.films;
};


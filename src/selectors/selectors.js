import {ALL_GENRES} from "../constants/constants";

export const selectFilmsFromState = (state) => {
  if (state.activeGenre !== ALL_GENRES) {
    return state.films.filter((film) => film.genre === state.activeGenre);
  }
  return state.films;
};


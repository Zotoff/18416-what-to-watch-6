import {ALL_GENRES} from "../constants/constants";

export const selectFilmsFromState = (films, genre) => {
  if (genre !== ALL_GENRES) {
    return films.filter((film) => film.genre === genre);
  }
  return films;
};


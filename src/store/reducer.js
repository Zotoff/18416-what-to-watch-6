import {ActionType} from "./actions";
import {Genres} from "../constants/constants";
import films from '../mocks/films';
import singleFilm from "../mocks/singlefilm";

const initialState = {
  activeGenre: Genres.ALL_GENRES,
  films,
  initialFilms: films,
  singleFilm,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
  }
  return state;
};


export {initialState, reducer, ActionType};

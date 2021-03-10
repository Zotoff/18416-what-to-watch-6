import {ActionType} from "./actions";
import {Genres, AuthorizationStatus} from "../constants/constants";

const initialState = {
  activeGenre: Genres.ALL_GENRES,
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  films: [],
  isDataLoaded: false,
  singleFilm: {
    name: ``,
    posterImage: ``,
    genre: ``,
    released: 2020,
    backgroundImage: ``
  },
  promoFilm: {
    name: ``,
    posterImage: `1`,
    genre: ``,
    released: 2020,
    backgroundImage: ``
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.payload
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true
      };
    case ActionType.GET_SINGLE_FILM:
      return {
        ...state,
        singleFilm: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        isDataLoaded: true,
        promoFilm: action.payload
      };
  }
  return state;
};


export {initialState, reducer, ActionType};

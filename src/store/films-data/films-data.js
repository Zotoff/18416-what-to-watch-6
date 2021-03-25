import {ActionType} from '../actions';
import {ALL_GENRES} from "../../constants/constants";

const initialState = {
  isApplicationReady: false,
  activeGenre: ALL_GENRES,
  films: [],
  genres: [],
  userData: {
    id: 0,
    name: ``,
    email: ``,
    avatarUrl: ``,
  },
  comments: []
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_APPLICATION:
      return {
        ...state,
        isApplicationReady: action.payload
      };
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
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ActionType.GET_SINGLE_FILM:
      return {
        ...state,
        singleFilm: action.payload,
        isDataLoaded: true
      };
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        isDataLoaded: true,
        promoFilm: action.payload
      };
    case ActionType.SHOW_MORE_FILMS:
      return {
        ...state,
        filmsCount: action.payload
      };
    case ActionType.SET_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
  }
  return state;
};

export {filmsData};

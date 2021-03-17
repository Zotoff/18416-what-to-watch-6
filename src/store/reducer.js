import {ActionType} from "./actions";
import {ALL_GENRES, AuthorizationStatus} from "../constants/constants";

const initialState = {
  isApplicationReady: false,
  activeGenre: ALL_GENRES,
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  films: [],
  genres: [],
  isfavorite: false,
  filmsCount: 8,
  isDataLoaded: false,
  singleFilm: {
    backgroundColor: `#F1E9CE`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    isFavorite: false,
    name: `Macbeth`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scoresCount: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  promoFilm: {
    backgroundColor: `#F1E9CE`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    genre: `Drama`,
    id: 1,
    isFavorite: false,
    name: `Macbeth`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 3.3,
    released: 2015,
    runTime: 113,
    scoresCount: 48798,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`
  },
  comments: [],
  comment: {}
};

const reducer = (state = initialState, action) => {
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


export {initialState, reducer, ActionType};

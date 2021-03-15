export const ActionType = {
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION:`,
  GET_SINGLE_FILM: `GET_SINGLE_FILM`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_APPLICATION: `GET_APPLICATION`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

export const ActionCreator = {
  setApplication: (applicationReady)=>{
    return {
      type: ActionType.GET_APPLICATION,
      payload: applicationReady
    };
  },
  getActiveGenre: (activeGenre)=>{
    return {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: activeGenre
    };
  },
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
  },
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  getSingleFilm: (film) => {
    return {
      type: ActionType.GET_SINGLE_FILM,
      payload: film
    };
  },
  getPromoFilm: (film) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: film
  }),
  showMoreFilms: (filmsCount) => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: filmsCount
  })
};


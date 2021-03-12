export const ActionType = {
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION:`,
  GET_SINGLE_FILM: `GET_SINGLE_FILM`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  GET_COMMENT: `GET_COMMENT`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_APPLICATION: `GET_APPLICATION`
};

export const ActionCreator = {
  getApplication: (applicationReady)=>{
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
  getComment: (comment) => ({
    type: ActionType.GET_COMMENT,
    payload: comment
  }),
  getPromoFilm: (film) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: film
  })
};


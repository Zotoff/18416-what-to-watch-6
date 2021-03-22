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
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  SET_COMMENT: `SET_COMMENT`
};

export const setApplication = (applicationReady)=>{
  return {
    type: ActionType.GET_APPLICATION,
    payload: applicationReady
  };
};
export const getActiveGenre = (activeGenre)=>{
  return {
    type: ActionType.GET_ACTIVE_GENRE,
    payload: activeGenre
  };
};
export const loadFilms = (films) => {
  return {
    type: ActionType.LOAD_FILMS,
    payload: films
  };
};
export const loadComments = (comments) => {
  return {
    type: ActionType.LOAD_COMMENTS,
    payload: comments[`data`]
  };
};
export const setComment = (comment) => {
  return {
    type: ActionType.SET_COMMENT,
    payload: comment
  };
};
export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});
export const getPromoFilm = (film) => ({
  type: ActionType.GET_PROMO_FILM,
  payload: film
});


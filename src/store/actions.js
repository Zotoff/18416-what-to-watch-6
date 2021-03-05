export const ActionType = {
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION:`,
  GET_SINGLE_FILM: `GET_SINGLE_FILM`,
};

export const ActionCreator = {
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
  })
};


export const ActionType = {
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  GET_ACTIVE_GENRE: `GET_ACTIVE_GENRE`
};

export const ActionCreator = {
  getActiveGenre: (activeGenre)=>{
    return {
      type: ActionType.GET_ACTIVE_GENRE,
      payload: activeGenre
    };
  },
};


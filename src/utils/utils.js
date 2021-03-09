export const makeNewStateValue = (state, newStateValue) => {
  return Object.assign({}, state, newStateValue);
};

export const getFilmsGenres = (genres) => {
  return genres;
};

export const getFilmsByGenre = (filmsList, activeGenre) => {
  switch (activeGenre) {
    case activeGenre:
      return filmsList.filter((film) => {
        return film.genre === activeGenre;
      });
    default:
      return filmsList;
  }
};

export const adaptFilms = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film, {
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
        runTime: film.run_time,
        isFavorite: film.is_favorite,
        scoresCount: film.scores_count
      });
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;

  return adaptedFilm;
};

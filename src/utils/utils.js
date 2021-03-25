import moment from "moment";
import {ALL_GENRES, Film, MINUTE_IN_HOUR, SECONDS_IN_MINUTE} from "../constants/constants";

export const calculateDate = (date) => {
  const dateDuration = moment.duration(date, `minutes`);
  const format = date > MINUTE_IN_HOUR ? `H[h] mm[m]` : `mm[m]`;
  return moment.utc(dateDuration.as(`milliseconds`)).format(format).toString();
};

export const getVideoProgress = (video) => (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));

export const dateCommentFormat = (date) => moment(date).format(`LL`);

export const formatVideoTime = (time) => {
  time = Math.floor(time);
  const minutes = Math.floor(time / SECONDS_IN_MINUTE);
  const seconds = Math.floor(time - minutes * SECONDS_IN_MINUTE);

  const minutesVal = minutes < 10 ? `0${minutes}` : String(minutes);
  const secondsVal = seconds < 10 ? `0${seconds}` : String(seconds);

  return `${minutesVal}:${secondsVal}`;
};

export const sortComments = (commentA, commentB) => {
  if (commentA.rating > commentB.rating) {
    return -1;
  }

  if (commentA.rating < commentB.rating) {
    return 1;
  }

  return 0;
};

export const translateRatingToWords = (initialRating) => {
  const rating = Math.floor(initialRating);
  if (rating > 0 && rating < 3) {
    return `Bad`;
  } else if (rating > 3 && rating < 5) {
    return `Normal`;
  } else if (rating > 5 && rating < 8) {
    return `Good`;
  } else if (rating > 8 && rating < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

export const getFilmsGenres = (films) => {
  const genres = films.map((film) => film.genre);
  return [ALL_GENRES, ...new Set(genres)].slice(0, Film.MAX_GENRES_COUNT);
};

export const getFilmsByGenre = (filmsList, activeGenre) => {
  return (activeGenre === ALL_GENRES) ? filmsList : (filmsList.filter((film) => activeGenre === film.genre));
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

export const adaptUserData = (data) => {
  const adaptedData = Object.assign(
      {},
      data, {
        avatarUrl: data.avatar_url,
        email: data.email,
        id: data.id,
        name: data.name
      });
  delete adaptedData.avatar_url;
  return adaptedData;
};

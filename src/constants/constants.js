export const MINUTE_IN_HOUR = 60;
export const SECONDS_IN_MINUTE = 60;
export const RATING_INPUTS_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const ALL_GENRES = `All genres`;

export const Film = {
  MAX_LIKES_COUNT: 4,
  VISIBLE_COUNT: 8,
  COUNT_PER_STEP: 8,
  MAX_GENRES_COUNT: 8,
  INITIAL_COUNT: 8,
  INITIAL_COMMENT_STARS: 3
};

export const TabsTypes = {
  OVERVIEW_TAB: `Overview`,
  REVIEWS_TAB: `Reviews`,
  DETAILS_TAB: `Details`
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`
};

export const AppRoute = {
  LOGIN: `/login`,
  ROOT: `/`,
  RESULT: `/`,
  MY_LIST: `/mylist`,
  FILM_ID: `/film/:id`,
  REVIEW_ID: `/films/:id/review`,
  PLAYER_ID: `/player/:id`,
  NOT_FOUND: `/notfound`
};

export const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  COMMENT: `/comments`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  LOGOUT: `/logout`
};

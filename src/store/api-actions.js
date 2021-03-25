import {
  requireAuthorization,
  loadFilms,
  redirectToRoute,
  loadComments,
  getPromoFilm,
  setApplication,
  setUserData
} from "./actions";
import {AuthorizationStatus, APIRoute} from "../constants/constants";
import {adaptFilms, adaptUserData} from "../utils/utils";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => adaptUserData(data))
    .then((userData) => dispatch(setUserData(userData)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .catch(() => {
    })
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilms(film)))
    .then((films) => dispatch(loadFilms(films)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => adaptUserData(data))
    .then((userData) => dispatch(setUserData(userData)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((error) => {
      throw error;
    })
);

export const getComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENT}/${id}`)
    .then((data) => dispatch(loadComments(data)))
    .catch((error) => {
      throw error;
    })
);

export const postComment = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENT}/${id}`, {rating, comment})
    .then(() => dispatch(getComments(id)))
    .then(() => dispatch(redirectToRoute(`/film/${id}`)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilms(data))
    .then((film) => dispatch(getPromoFilm(film)))
);

export const changeMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(fetchPromoFilm()))
    .catch(() => {})
);

export const init = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilms(film)))
    .then((films) => dispatch(loadFilms(films)))
    .then(() => dispatch(fetchPromoFilm()))
    .then(() => dispatch(checkAuth()))
    .then(() => dispatch(setApplication(true)))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.UNAUTHORIZED)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .catch((error) => {
      throw error;
    })
);

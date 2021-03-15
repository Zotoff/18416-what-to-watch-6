import {ActionCreator} from "./actions";
import {AuthorizationStatus, APIRoute} from "../constants/constants";
import {adaptFilms} from "../utils/utils";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const getReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENT}/${id}`)
    .then((data) => dispatch(ActionCreator.loadComments(data)))
    .catch((error) => {
      throw error;
    })
);

export const setComment = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENT}/${id}`, {rating, comment})
    .then(({data}) => dispatch(ActionCreator.getComment(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/film/${id}`)))
    .catch((error) => {
      throw error;
    })
);

export const getPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilms(data))
    .then((film) => dispatch(ActionCreator.getPromoFilm(film)))
);

export const init = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilms(film)))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
    .then(() => dispatch(checkAuth()))
    .then(() => dispatch(ActionCreator.setApplication(true)))
);

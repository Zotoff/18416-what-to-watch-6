import {ActionCreator} from "./actions";
import {AuthorizationStatus, AppRoute, APIRoute} from "../constants/constants";

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

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

export const getFilm = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/` + id)
    .then(({data}) => dispatch(ActionCreator.getSingleFilm(data)))
);

export const setComment = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENT}/${id}`, {rating, comment})
    .then(({data}) => dispatch(ActionCreator.getComment(data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const getPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.getPromoFilm(data)))
)

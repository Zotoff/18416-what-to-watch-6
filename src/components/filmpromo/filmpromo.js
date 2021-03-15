import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {filmType} from "../../types/types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/constants";
import {getPromoFilm} from "../../store/api-actions";

const FilmPromo = (props) => {

  const {getPromoFromServer, promoFilm, authorizationStatus} = props;

  useEffect(() => {
    getPromoFromServer();
  }, []);

  const {id, name, posterImage, genre, released, backgroundImage} = promoFilm;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to="/login">Sign in</Link>) : (<div className="user-block__avatar"><Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link></div>)}
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={`player/${id}`} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s">
                  </use>
                </svg>
                <span>Play</span>
              </Link>
              <Link to={`/mylist`} className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add">
                  </use>
                </svg>
                <span>My list</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmPromo.propTypes = {
  promoFilm: filmType.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  getPromoFromServer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  promoFilm: state.promoFilm,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPromoFromServer: () => dispatch(getPromoFilm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPromo);

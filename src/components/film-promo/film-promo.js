import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {promoType, userDataType} from "../../types/types";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/constants";
import MyListBtn from "../my-list-btn/my-list-btn";

const FilmPromo = (props) => {

  const {film, authorizationStatus, userData} = props;

  const {id, name, posterImage, genre, released, backgroundImage} = film;

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
          {
            authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to="/login">Sign in</Link>) : (
              <div className="user-block__avatar">
                <Link to="/mylist">
                  <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
                </Link>
              </div>
            )
          }
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
              <MyListBtn film={film} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmPromo.propTypes = {
  film: promoType,
  authorizationStatus: PropTypes.string.isRequired,
  userData: userDataType.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userData: USER.userData
});

export default connect(mapStateToProps)(FilmPromo);

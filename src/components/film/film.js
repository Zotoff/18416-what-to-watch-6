import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../constants/constants";
import {Redirect} from "react-router-dom";

import {PropTypes} from 'prop-types';

import {Link} from 'react-router-dom';
import {filmType} from "../../types/types";

import Tabs from "../tabs/tabs";

import ArtBoard from '../artboard/artboard';
import {LikeThis} from '../like-this/like-this';

const Film = (props) => {

  const {films, authorizationStatus} = props;

  const id = props.match.params.id;
  const singleFilm = films.find((f) => f.id === +id);

  if (!singleFilm) {
    return <Redirect to={`/notfound`} />;
  }

  return (
    <>
      <ArtBoard />

      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={singleFilm.backgroundImage} alt={singleFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={`/`} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to="/login">Sign in</Link>) : (<div className="user-block__avatar"><Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link></div>)}
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{singleFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{singleFilm.genre}</span>
                <span className="movie-card__year">{singleFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${singleFilm.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s">
                    </use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={`/mylist/${singleFilm.id}`} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add">
                    </use>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTHORIZED ? (<Link to={`/films/${singleFilm.id}/review`} className="btn movie-card__button">Add review</Link>) : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={singleFilm.posterImage} alt={singleFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs film={singleFilm}/>
            </div>
          </div>
        </div>
      </section>
      <LikeThis films={films} genre={singleFilm.genre} />
    </>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  authorizationStatus: state.authorizationStatus
});

Film.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  authorizationStatus: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  singleFilm:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    }),
};

export {Film};
export default connect(mapStateToProps)(Film);

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ArtBoard from '../artboard/artboard';
import CommentForm from '../commentform/comment-form';
import {adaptFilms} from "../../utils/utils";
import {getFilm} from "../../store/api-actions";


const Review = (props) => {

  const {getFilmFromServer, singleFilm, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      const getFilmId = (path) => {
        const pathArray = path.split(`/`);
        return pathArray[2];
      };

      const filmId = getFilmId(window.location.pathname);

      getFilmFromServer(filmId);
    }
  }, [isDataLoaded]);

  const adaptedFilm = adaptFilms(singleFilm);

  // const {name, posterImage} = props.film;
  return (
    <>
      <ArtBoard />
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{adaptedFilm.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={adaptedFilm.posterImage} alt={adaptedFilm.name} width="218" height="327" />
          </div>
        </div>

        <CommentForm id={adaptedFilm.id} />

      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  singleFilm: state.singleFilm,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmFromServer: (id) => dispatch(getFilm(id))
  };
};

Review.propTypes = {
  singleFilm:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired
    }),
  getFilmFromServer: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired
};

export {Review};
export default connect(mapStateToProps, mapDispatchToProps)(Review);

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFilm} from '../../store/api-actions';
import {adaptFilms} from "../../utils/utils";
import {AuthorizationStatus} from "../../constants/constants";

import {Link} from 'react-router-dom';

import ArtBoard from '../artboard/artboard';
import Footer from '../footer/footer';

const Film = (props) => {

  const {getFilmFromServer, singleFilm, isDataLoaded, authorizationStatus} = props;

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

  return (
    <>
      <ArtBoard />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={adaptedFilm.backgroundImage} alt={adaptedFilm.name} />
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
              <h2 className="movie-card__title">{adaptedFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{adaptedFilm.genre}</span>
                <span className="movie-card__year">{adaptedFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${adaptedFilm.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={`/mylist/${adaptedFilm.id}`} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTHORIZED ? (<Link to={`/films/${adaptedFilm.id}/review`} className="btn movie-card__button">Add review</Link>) : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={adaptedFilm.posterImage} alt={adaptedFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score"></div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">Very good</span>
                  <span className="movie-rating__count">ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p></p>
                <p className="movie-card__director"><strong>Director:</strong> {adaptedFilm.director}</p>

                <p className="movie-card__starring"><strong>Starring:</strong> {adaptedFilm.starring}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  singleFilm: state.singleFilm,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmFromServer: (id) => dispatch(getFilm(id))
  };
};

Film.propTypes = {
  singleFilm:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      starring: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    }),
  getFilmFromServer: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ArtBoard from '../art-board/art-board';
import CommentForm from '../comment-form/comment-form';
import {filmType} from "../../types/types";
import {AuthorizationStatus} from "../../constants/constants";


const Review = (props) => {

  const {films, match, authorizationStatus} = props;

  const id = match.params.id;
  const singleFilm = films.find((f) => f.id === +id);

  return (
    <>
      <ArtBoard />
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={singleFilm.backgroundImage} alt={singleFilm.name} />
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
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{singleFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to="/login">Sign in</Link>) : (<div className="user-block__avatar"><Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link></div>)}
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={singleFilm.posterImage} alt={singleFilm.name} width="218" height="327" />
          </div>
        </div>

        <CommentForm id={+id} />

      </section>
    </>
  );
};

const mapStateToProps = ({DATA, USER}) => ({
  films: DATA.films,
  isDataLoaded: DATA.isDataLoaded,
  authorizationStatus: USER.authorizationStatus,
});

Review.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  authorizationStatus: PropTypes.string.isRequired
};

export {Review};
export default connect(mapStateToProps)(Review);

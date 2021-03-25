import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ArtBoard from '../art-board/art-board';
import FilmCard from '../film-card/film-card';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

import {filmType, userDataType} from "../../types/types";
import {AuthorizationStatus, AppRoute} from "../../constants/constants";
import {logOut} from "../../store/api-actions";

const MyList = (props) => {
  const {films, authorizationStatus, logoutApp, userData} = props;
  const filmsForMyList = films.filter((film) => film.isFavorite === true);

  const handleLogout = () => {
    logoutApp();
  };

  return (
    <>
      <ArtBoard />
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to={AppRoute.LOGIN}>Sign in</Link>) : (<div><a className="user-block__link" onClick={handleLogout}>Sign out</a><div className="user-block__avatar"><img src={userData.avatarUrl} alt="User avatar" width="63" height="63" /></div></div>)}
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {filmsForMyList.map((film) => {
              return <FilmCard key={film.id} film={film} />;
            })}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userData: USER.userData
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutApp: () => dispatch(logOut())
  };
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  authorizationStatus: PropTypes.string.isRequired,
  logoutApp: PropTypes.func.isRequired,
  userData: userDataType.isRequired
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

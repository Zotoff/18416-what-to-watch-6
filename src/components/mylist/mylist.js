import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ArtBoard from '../artboard/artboard';
import FilmCard from '../filmcard/filmcard';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

import {filmType} from "../../types/types";
import {AuthorizationStatus} from "../../constants/constants";

const MyList = (props) => {
  const {films, authorizationStatus} = props;
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
            {authorizationStatus === AuthorizationStatus.UNAUTHORIZED ? (<Link className="user-block__link" to="/login">Sign in</Link>) : (<div className="user-block__avatar"><Link to="/mylist"><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link></div>)}
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {films.map((film, index) => {
              return <FilmCard key={index} film={film} />;
            })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

MyList.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  authorizationStatus: PropTypes.string.isRequired
};

export {MyList};
export default connect(mapStateToProps)(MyList);

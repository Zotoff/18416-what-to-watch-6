import React from 'react';
import PropTypes from 'prop-types';
import ArtBoard from '../artboard/artboard';
import FilmCard from '../filmcard/filmcard';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

const MyList = (props) => {
  const {films} = props;
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
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
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

export default MyList;

MyList.propTypes = {
  films: PropTypes.array.isRequired
};
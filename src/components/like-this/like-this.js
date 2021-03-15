import React from "react";
import PropTypes from "prop-types";

import LikeThisFilm from "../like-this-film/like-this-film";

import {MAX_LIKE_FILMS_COUNT} from "../../constants/constants";

import Footer from "../footer/footer";
import {filmType} from "../../types/types";

const findFilmsByGenre = (films, genreName) => {
  const filteredArray = films.filter((f) => f.genre === genreName);
  const filteredArrayToShow = filteredArray.slice(0, MAX_LIKE_FILMS_COUNT);
  return (
    <>
      {filteredArrayToShow.map((item, index) => {
        return <LikeThisFilm film={item} key={index} />;
      })}
    </>
  );
};

const LikeThis = ({films, genre}) => {
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {findFilmsByGenre(films, genre)}
        </div>
      </section>
      <Footer />
    </div>
  );
};

LikeThis.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  genre: PropTypes.string.isRequired
};

export {LikeThis};

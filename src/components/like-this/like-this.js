import React from "react";
import PropTypes from "prop-types";

import LikeThisFilm from "../like-this-film/like-this-film";

import {Film} from "../../constants/constants";

import Footer from "../footer/footer";
import {filmType} from "../../types/types";

const findFilmsByGenre = (films, genreName, idToHide) => {
  const filteredArray = films.filter((f) => f.genre === genreName && f.id !== idToHide);
  const filteredArrayToShow = filteredArray.slice(0, Film.MAX_LIKES_COUNT);
  return (
    <>
      {filteredArrayToShow.map((item) => {
        return <LikeThisFilm film={item} key={item.id} />;
      })}
    </>
  );
};

const LikeThis = ({films, genre, idToHide}) => {
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">
          {findFilmsByGenre(films, genre, idToHide)}
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
  idToHide: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired
};

export {LikeThis};

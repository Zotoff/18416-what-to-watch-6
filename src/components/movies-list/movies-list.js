import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import {filmType} from "../../types/types";
import ShowMoreButton from "../show-more-button/show-more-button";

const MoviesList = (props) => {
  const {films, visibleNum, handleShowMoreClick} = props;
  return (
    <>
      <div className={`catalog__movies-list`}>
        {
          films.slice(0, visibleNum).map((film) => <FilmCard key={film.id} film={film} />)
        }
      </div>
      <div className="catalog__more">
        {films.length > visibleNum && <ShowMoreButton handleClick={handleShowMoreClick} />}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  visibleNum: PropTypes.number.isRequired,
  handleShowMoreClick: PropTypes.func.isRequired
};

export default MoviesList;

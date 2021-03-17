import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../filmcard/filmcard";
import {filmType} from "../../types/types";

const MoviesList = (props) => {
  const {films, visibleNum} = props;
  return (
    <div className={`catalog__movies-list`}>
      {
        films.slice(0, visibleNum).map((film) => <FilmCard key={film.id} film={film} />)
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  visibleNum: PropTypes.number.isRequired
};

export default MoviesList;

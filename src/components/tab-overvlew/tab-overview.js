import React from "react";
import PropTypes from "prop-types";
import {translateRatingToWords} from "../../utils/utils";

const TabOverView = (props) => {
  const {director, rating, description, scoresCount, starring} = props;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{translateRatingToWords(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

TabOverView.propTypes = {
  director: PropTypes.string.isRequired,
  scoresCount: PropTypes.number.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default TabOverView;

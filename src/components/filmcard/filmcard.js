import React from 'react';
import PropTypes from 'prop-types';

import {useHistory} from 'react-router-dom';

const FilmCard = (props) => {
  const {id, posterImage, name} = props.film;
  const {handleFilmHover} = props.handleFilmHover;
  const history = useHistory();
  return (
    <article className="small-movie-card catalog__movies-card">
      <div onMouseEnter={handleFilmHover} className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={
          (evt) => {
            evt.preventDefault();
            history.push(`/film/${id}`);
          }} className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  film:
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
    }),
  handleFilmHover: PropTypes.func.isRequired
};

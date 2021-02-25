import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {genres, onGenreClick, currentActiveGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) => {
          return (<li key={index} className={`catalog__genres-item ${genre === currentActiveGenre ? `catalog__genres-item--active` : ``}`}>
            <a
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onGenreClick(genre);
              }}
            >{genre}</a>
          </li>);
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  currentActiveGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenreList;


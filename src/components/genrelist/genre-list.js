import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {genres, handleGenreClick, currentActiveGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) => {
          return (<li key={index} className={`catalog__genres-item ${genre === currentActiveGenre ? `catalog__genres-item--active` : ``}`}>
            <span
              className="catalog__genres-link"
              style={{cursor: `pointer`}}
              onClick={({target}) => {
                handleGenreClick(target.textContent);
              }}
            >{genre}
            </span>
          </li>);
        })
      }
    </ul>
  );
};

GenreList.propTypes = {
  genres: PropTypes.array.isRequired,
  currentActiveGenre: PropTypes.string.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};

export default GenreList;


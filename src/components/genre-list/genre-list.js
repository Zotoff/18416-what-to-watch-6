import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getFilmsGenres} from "../../utils/utils";
import {filmType} from "../../types/types";

const GenreList = (props) => {
  const {genres, handleGenreClick, currentActiveGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => {
          return (<li key={`link_` + genre} className={`catalog__genres-item ${genre === currentActiveGenre ? `catalog__genres-item--active` : ``}`}>
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

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  genres: getFilmsGenres(DATA.films)
});

GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  currentActiveGenre: PropTypes.string.isRequired,
  handleGenreClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(GenreList);


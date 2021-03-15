import React, {useState} from 'react';
import {connect} from "react-redux";

import FilmPromo from '../filmpromo/filmpromo';
import Footer from '../footer/footer';
import GenreList from "../genrelist/genre-list";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';

import {getFilmsGenres} from '../../utils/utils';
import {selectFilmsFromState} from '../../selectors/selectors';
import {ActionCreator} from "../../store/actions";
import {GenresList, FILMS_COUNT_PER_STEP, VISIBLE_FILMS} from '../../constants/constants';
import ShowMoreButton from "../show-more-button/show-more-button";
import {filmType} from "../../types/types";

const Main = (props) => {

  const {films, activeGenre, onGenreClick} = props;

  const [filmsVisibleNum, setFilmsVisibleNum] = useState(VISIBLE_FILMS);

  const handleGenreClick = (genre) => {
    onGenreClick(genre);
  };

  // Handle show more click button
  const handleShowMoreClick = () => {
    setFilmsVisibleNum(filmsVisibleNum + FILMS_COUNT_PER_STEP);
  };

  return (
    <>
      <FilmPromo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={getFilmsGenres(GenresList)}
            currentActiveGenre={activeGenre}
            handleGenreClick={handleGenreClick}
          />

          <MoviesList films={films} visibleNum={filmsVisibleNum} />

          <div className="catalog__more">
            {films.length > filmsVisibleNum && <ShowMoreButton handleClick={handleShowMoreClick} />}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  films: selectFilmsFromState(state),
  singleFilm: state.singleFilm,
  activeGenre: state.activeGenre,
  isDataLoaded: state.isDataLoaded,
  onLoadData: state.onLoadData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (genre) => dispatch(ActionCreator.getActiveGenre(genre)),
  };
};

Main.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

import React, {useState} from 'react';
import {connect} from "react-redux";

import FilmPromo from '../film-promo/film-promo';
import Footer from '../footer/footer';
import GenreList from "../genre-list/genre-list";
import MoviesList from "../movies-list/movies-list";
import PropTypes from 'prop-types';

import {selectFilmsFromState} from '../../selectors/selectors';
import {getActiveGenre} from "../../store/actions";
import {Film} from '../../constants/constants';
import {filmType, promoType} from "../../types/types";

const Main = (props) => {

  const {films, activeGenre, onGenreClick, promoFilm} = props;

  const [filmsVisibleNum, setFilmsVisibleNum] = useState(Film.VISIBLE_COUNT);

  const handleGenreClick = (genre) => {
    onGenreClick(genre);
  };

  // Handle show more click button
  const handleShowMoreClick = () => {
    setFilmsVisibleNum(filmsVisibleNum + Film.COUNT_PER_STEP);
  };

  return (
    <React.Fragment>
      <FilmPromo film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            currentActiveGenre={activeGenre}
            handleGenreClick={handleGenreClick}
          />

          <MoviesList films={selectFilmsFromState(films, activeGenre)} handleShowMoreClick={handleShowMoreClick} visibleNum={filmsVisibleNum} />

        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};


const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm,
  singleFilm: DATA.singleFilm,
  activeGenre: DATA.activeGenre,
  onLoadData: DATA.onLoadData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (genre) => dispatch(getActiveGenre(genre)),
  };
};

Main.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  promoFilm: promoType.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

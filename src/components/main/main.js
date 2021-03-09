import React, {useEffect} from 'react';
import {connect} from "react-redux";

import FilmPromo from '../filmpromo/filmpromo';
import Footer from '../footer/footer';
import GenreList from "../genrelist/genre-list";
import MoviesList from "../movieslist/movieslist";
import PropTypes from 'prop-types';
import Spinner from "../spinner/spinner";

import {getFilmsGenres, getSingleFilm} from '../../utils/utils';
import {selectFilmsFromState} from '../../selectors/selectors';
import {ActionCreator} from "../../store/actions";
import {fetchFilmList} from "../../store/api-actions";
import {GenresList} from '../../constants/constants';

const Main = (props) => {

  const {films, activeGenre, onGenreClick, isDataLoaded, onLoadData} = props;

  useEffect(()=>{
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <FilmPromo />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={getFilmsGenres(GenresList)}
            currentActiveGenre={activeGenre}
            onGenreClick={onGenreClick}
          />

          <MoviesList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
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
    onLoadData: () => dispatch(fetchFilmList()),
  };
};

Main.propTypes = {
  films: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

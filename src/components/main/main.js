import React from 'react';
import {connect} from "react-redux";

import FilmPromo from '../filmpromo/filmpromo';
import Footer from '../footer/footer';
import ArtBoard from '../artboard/artboard';
import GenreList from "../genrelist/genre-list";
import MoviesList from "../movieslist/movieslist";
import PropTypes from 'prop-types';

import {getFilmsGenres} from '../../utils/utils';
import {selectFilmsFromState} from '../../selectors/selectors';
import {ActionCreator} from "../../store/actions";

const Main = (props) => {

  const {singleFilm, films, initialFilms, activeGenre, onGenreClick} = props;

  return (
    <>
      <ArtBoard />
      <FilmPromo singleFilm={singleFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            genres={getFilmsGenres(initialFilms)}
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
  initialFilms: state.initialFilms,
  activeGenre: state.activeGenre,
  singleFilm: state.singleFilm,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: (genre) => dispatch(ActionCreator.getActiveGenre(genre))
  };
};

Main.propTypes = {
  singleFilm:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired
    }),
  films: PropTypes.array.isRequired,
  initialFilms: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

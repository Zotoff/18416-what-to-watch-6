import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmcard/filmcard';

class Movieslist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: {
        id: 1
      }
    };
    this.handleFilmHover = this.handleFilmHover.bind(this);
  }

  handleFilmHover() {
    this.setState({activeFilm: 2});
  }
  render() {

    return (
      <div className={`catalog__movies-list`}>
        {this.props.films.map((film, index) => {
          return <FilmCard key={index} film={film} handleFilmHover={this.handleFilmHover} />;
        })}
      </div>
    );
  }
}

export default Movieslist;


Movieslist.propTypes = {
  films: PropTypes.array.isRequired
};

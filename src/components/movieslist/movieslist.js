import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../filmcard/filmcard';

class Movieslist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className={`catalog__movies-list`}>
        {this.props.films.map((film, index) => {
          return <FilmCard key={index} film={film} />;
        })}
      </div>
    );
  }
}

export default Movieslist;


Movieslist.propTypes = {
  films: PropTypes.array.isRequired
};

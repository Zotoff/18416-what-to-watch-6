import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

const App = (props) => {
  const {promoFilm} = props;

  return (
    <Main promoFilm={promoFilm} />
  );
};

export default App;

App.propTypes = {
  promoFilm:
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
      })
};

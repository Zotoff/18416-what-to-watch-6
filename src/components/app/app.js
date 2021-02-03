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
  promoFilm: PropTypes.object.isRequired
};

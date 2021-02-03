import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  filmTitle: `Grand Budapest`,
  filmPoster: `img/the-grand-budapest-hotel-poster.jpg`,
  filmPosterAlt: `The Grand Budapest Hotel poster`,
  filmGenre: `Drama`,
  filmYear: `2014`,
};

ReactDOM.render(<App promoFilm={promoFilm} />, document.querySelector(`#root`));

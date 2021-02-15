import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {promoFilm} from './constants/constants';
import films from './mocks/films';
import singleFilm from './mocks/singlefilm';

ReactDOM.render(<App promoFilm={promoFilm} films={films} singleFilm={singleFilm} />, document.querySelector(`#root`));

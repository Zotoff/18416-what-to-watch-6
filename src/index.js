import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {promoFilm} from './constants/constants';


ReactDOM.render(<App promoFilm={promoFilm} />, document.querySelector(`#root`));

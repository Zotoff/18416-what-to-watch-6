import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import singleFilm from './mocks/singlefilm';

ReactDOM.render(<App films={films} singleFilm={singleFilm} />, document.querySelector(`#root`));

import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../main/main';
import Login from '../login/login';
import MyList from "../mylist/mylist";
import Film from "../filmcard/filmcard";
import Review from "../review/review";
import Player from "../player/player";
import NotFoundScreen from "../notfound/notfound";

const App = (props) => {
  const {promoFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main promoFilm={promoFilm} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/film/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <Review/>
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>

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

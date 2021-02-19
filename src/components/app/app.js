import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../main/main';
import Login from '../login/login';
import MyList from "../mylist/mylist";
import Film from "../film/film";
import Review from "../review/review";
import Player from "../player/player";
import NotFoundScreen from "../notfound/notfound";

const App = (props) => {
  const {films, singleFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main singleFilm={singleFilm} films={films} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}/>
        </Route>
        <Route exact path="/film/:id">
          <Film film={singleFilm}/>
        </Route>
        <Route exact path="/films/:id/review">
          <Review film={singleFilm}/>
        </Route>
        <Route exact path="/player/:id">
          <Player film={singleFilm}/>
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
  films: PropTypes.array.isRequired,
  singleFilm: PropTypes.object.isRequired
};

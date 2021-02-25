import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Main from '../main/main';
import Login from '../login/login';
import MyList from "../mylist/mylist";
import Film from "../film/film";
import Review from "../review/review";
import Player from "../player/player";
import NotFoundScreen from "../notfound/notfound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: this.props.singleFilm,
      films: this.props.films
    };
  }

  render() {
    const {films, singleFilm} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
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
  }
}

export {App};

App.propTypes = {
  films: PropTypes.array.isRequired,
  singleFilm: PropTypes.object.isRequired
};

/*
* заргузилось приложение, вызывается экшн, который делает запросы через мапдиспатчтупропс и пишет в стор.
* Стейт - глобальный, задается в initialState в редюсере
* хранилище не обновляется если оно не смаплено в мапстейттупропс, т.е. то, что пишем там - то и обновляется.
* */

const mapStateToProps = (state) => {
  return {
    films: state.films,
    singleFilm: state.singleFilm
  };
};

export default connect(mapStateToProps)(App);



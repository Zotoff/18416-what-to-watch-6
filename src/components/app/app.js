import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Main from '../main/main';
import Login from '../login/login';
import MyList from "../mylist/mylist";
import Film from "../film/film";
import Review from "../review/review";
import Player from "../player/player";
import NotFoundScreen from "../notfound/notfound";
import {checkAuth} from "../../store/api-actions";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: this.props.singleFilm,
      films: this.props.films
    };
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const {films} = this.props;
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact
            path="/mylist"
            render={() => <MyList films={films}/>}
          >
          </PrivateRoute>
          <Route exact path="/film/:id">
            <Film />
          </Route>
          <PrivateRoute exact
            path="/films/:id/review"
            render={() => <Review />}
          >
          </PrivateRoute>
          <Route exact path="/player/:id">
            <Player />
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
  singleFilm: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    singleFilm: state.singleFilm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => {
      dispatch(checkAuth());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



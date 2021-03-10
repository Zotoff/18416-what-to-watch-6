import React, {useEffect} from 'react';
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
import {AppRoute} from "../../constants/constants";

const App = ({films}) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={films}/>}
        >
        </PrivateRoute>
        <Route exact path="/film/:id" component={Film} />
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
};

export {App};

App.propTypes = {
  films: PropTypes.array.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
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



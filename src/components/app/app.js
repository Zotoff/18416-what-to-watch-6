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
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history/browser-history";
import {AppRoute} from "../../constants/constants";
import {init} from "../../store/api-actions";
import {filmType} from "../../types/types";

const App = ({films, isApplicationReady, initApp}) => {
  useEffect(() => {
    initApp();
  }, []);

  if (!isApplicationReady) {
    return <p>Not ready</p>;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main} />
        <Route exact path={AppRoute.LOGIN} component={Login} />
        <PrivateRoute exact
          path={AppRoute.MY_LIST}
          render={() => <MyList films={films}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM_ID} component={Film} />
        <PrivateRoute exact
          path={AppRoute.REVIEW_ID}
          render={({match}) => (
            <Review match={match}/>
          )}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER_ID}>
          <Player films={films} handlePlayerExit={() => {
            history.back();
          }}/>
        </Route>
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export {App};

App.propTypes = {
  films: PropTypes.arrayOf(
      filmType.isRequired
  ),
  isApplicationReady: PropTypes.bool.isRequired,
  initApp: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    isApplicationReady: state.isApplicationReady,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initApp: () => dispatch(init())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



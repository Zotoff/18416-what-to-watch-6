import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./api/api";
import {ActionCreator} from "./store/actions";
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./constants/constants";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.UNAUTHORIZED))
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth()); // перенести в componentDidMount в App.js

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.querySelector(`#root`)
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/root-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createAPI} from "./api/api";
import {requireAuthorization} from "./store/actions";
import {AuthorizationStatus} from "./constants/constants";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.UNAUTHORIZED))
);

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.querySelector(`#root`)
);

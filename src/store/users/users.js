import {ActionType} from '../actions';
import {AuthorizationStatus} from "../../constants/constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }
  return state;
};

export {users};



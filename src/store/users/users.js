import {ActionType} from '../actions';
import {AuthorizationStatus} from "../../constants/constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.UNAUTHORIZED,
  userData: {
    id: null,
    email: ``,
    name: ``,
    avatarUrl: `img/avatar.jpg`
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
  }
  return state;
};

export {users};



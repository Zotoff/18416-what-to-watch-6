import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {users} from './users/users';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.USER]: users,
});

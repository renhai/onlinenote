import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import locale from './locale';
import home from './home';

export default combineReducers({
  routing,
  locale,
  home,
});

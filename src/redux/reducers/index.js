import { combineReducers } from 'redux';
import movies from './movies';
import metaData from './metaData';

export default combineReducers({ movies, metaData });

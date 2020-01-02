import {combineReducers} from 'redux';
import counter from './counter';
import weather from './getWeather';

export default combineReducers({
  counter,
  weather,
});

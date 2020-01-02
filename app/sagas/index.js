import {all} from 'redux-saga/effects';
import {getWeatherWatch} from '@reducers/getWeather';

export default function* rootSaga() {
  yield all([getWeatherWatch()]);
}

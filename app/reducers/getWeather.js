import {takeEvery, put, call, select, takeLatest} from 'redux-saga/effects';

const GET_WEATHER = '[getWeather] GET_WEATHER';
const GET_WEATHER_SUCCESS = '[getWeather] GET_WEATHER_SUCCESS';
const GET_WEATHER_ERROR = '[getWeather] GET_WEATHER_ERROR';

const initialState = {loading: false, error: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {...state, loading: true};
    case GET_WEATHER_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case GET_WEATHER_ERROR:
      return {...state, loading: false, error: action.error};

    default:
      return state;
  }
};

function* getWeatherAsync({params}) {
  const {lat = 35, lon = 139} = params;
  const apiKey = '9dd466775ce909efe56bac3341fe8afd';
  try {
    const response = yield fetch(
      `https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    );
    const weather = yield response.json();
    console.log('weather--->', weather);
    yield put(getWeatherSuccess(weather));
  } catch (error) {
    console.log('weather error--->', error);
    yield put(getWeatherError(error));
  }
}

export const getWeather = (params = {}) => ({
  type: GET_WEATHER,
  params,
});

export const getWeatherSuccess = payload => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});

export const getWeatherError = error => ({
  type: GET_WEATHER_ERROR,
  error,
});

export function* getWeatherWatch() {
  yield takeLatest(GET_WEATHER, getWeatherAsync);
}

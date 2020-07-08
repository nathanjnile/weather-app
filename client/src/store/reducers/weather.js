import * as actionType from "../actions/actionTypes";

const initialState = {
  weatherStatus: false,
  location: "",
  countryCode: "",
  dataArr : [],
  error: null
}

const addWeather = (state, action) => {
  const { payload } = action;

  const weatherData = [];

  for (let i = 0; i < 6; i++) {
    weatherData.push({
      temperatureHigh: payload.data[i].high_temp,
      temperatureLow: payload.data[i].low_temp,
      description: payload.data[i].weather.description,
      date: payload.data[i].datetime,
      img: payload.data[i].weather.icon
    })
  }

  return {
    ...state,
    weatherStatus: true,
    location: payload.city_name,
    countryCode: payload.country_code,
    dataArr : weatherData
    }
}

const error = (state, action) => {

  return {
    ...state,
    error: "Invalid City or Country, please try again"
    }
}

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_WEATHER: return addWeather(state, action);
        case actionType.ERROR: return error(state, action);
        default:
            return state;
    }
};

export default reducer;

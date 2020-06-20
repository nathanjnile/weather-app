import * as actionType from "../actions/actionTypes";

const initialState = {
  weather : {
    weatherStatus: false,
    location: "",
    countryCode: "",
    temperatureHigh: null,
    temperatureLow: null,
    description: "",
    precipitation : null,
    date: ""
  }

}

const addWeather = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    weather: {
      ...state.weather,
      weatherStatus: true,
      location: payload.city_name,
      countryCode: payload.country_code,
      temperatureHigh: payload.data[0].high_temp,
      temperatureLow: payload.data[0].low_temp,
      description: payload.data[0].weather.description,
      date: payload.data[0].datetime,
    }
  }
}



const reducer =(state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_WEATHER: return addWeather(state, action);
        default:
            return state;
    }
};

export default reducer;

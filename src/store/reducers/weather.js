import * as actionType from "../actions/actionTypes";
import { getNames } from "country-list";

const initialState = {
  weatherStatus: false,
  location: "",
  countryCode: "",
  dataArr : [],
  countryList: getNames()
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

  console.log(weatherData)

  return {
    ...state,
    weatherStatus: true,
    location: payload.city_name,
    countryCode: payload.country_code,
    dataArr : weatherData
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

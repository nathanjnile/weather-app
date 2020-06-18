import * as actionType from "../actions/actionTypes";

const initialState = {
  weather : {
    weatherStatus: false,
    location: "",
    country: "",
    temperature: null,
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
      temperature: payload.data[0].high_temp,
      description: payload.data[0].weather.description,
      date: payload.data[0].datetime
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

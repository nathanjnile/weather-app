import * as actionType from "../actions/actionTypes";

const initialState = {
  weather : {}
}

const addWeather = (state, action) => {
    return {
      ...state,
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

import * as actionTypes from "./actionTypes";
// import axios from "axios";

export const addWeather = (weatherLocation) => {
    return (dispatch) => {
            dispatch({
                type: actionTypes.ADD_WEATHER,
                payload: weatherLocation
            });
        }
}

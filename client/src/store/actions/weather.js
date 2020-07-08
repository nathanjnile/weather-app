import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addWeather = (weatherLocation, weatherCountry) => {
    return (dispatch) => {
        axios.post("/api/weather/", {weatherCountry, weatherLocation})
        .then(response => {
            if(response.status !== 200) {
                dispatch({
                    type: actionTypes.ERROR
                })
            }
            dispatch({
                type: actionTypes.ADD_WEATHER,
                payload: response.data
            });
        }).catch(err => {
        console.log(err)
        });

        }
}

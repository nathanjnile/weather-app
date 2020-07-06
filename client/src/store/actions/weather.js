import * as actionTypes from "./actionTypes";
import axios from "axios";
import {APIKEY} from "../../config";

export const addWeather = (weatherLocation, weatherCountry) => {
    return (dispatch) => {
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${weatherLocation}&country=${weatherCountry}&key=${APIKEY}`)
        .then(response => {
            console.log(response)
            if(response.status !== 200) {
                console.log("Invalid search, please try again")
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

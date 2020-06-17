import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addWeather = (weatherLocation) => {
    return (dispatch) => {
        dispatch({type: actionTypes.WEATHER_LOADING});
        axios.get()
        .then(response => {
            console.log(response)
            dispatch({
                type: actionTypes.ADD_TASK,
                payload: response.data.task
            })
        }).catch(err => {
            console.log(err)
        } );
    };   
}

import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';
import * as actions from "../../../store/actions/index";
import lookup from "country-code-lookup"

const WeatherForecast = (props) => {
  const { weather } = props;

  useEffect(() => {
    if (weather.weatherStatus) {
    console.log()
    }
  }, [weather.weatherStatus, weather.countryCode])


  return (
        <div>
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `${weather.date}` : null}
            </Typography> 
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `Description: ${weather.description}` : null}
            </Typography>  
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `${weather.location}, ` + lookup.byIso(weather.countryCode).country : null}
            </Typography> 
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `Temperature high/low: ${weather.temperatureHigh}/${weather.temperatureLow}` : null}
            </Typography> 
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `${weather.date}` : null}
            </Typography> 
        </div>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  };
}

const mapDispatchToProps = dispatch => {
  return {
      // onWeatherAdded: () => dispatch(actions.addWeather()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);




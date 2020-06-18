import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from '@material-ui/core';
import * as actions from "../../../store/actions/index";

const WeatherForecast = (props) => {
  const { weather } = props;

  return (
        <div>
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            {weather.weatherStatus ? `In ${weather.location} it is ${weather.description}` : null}
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




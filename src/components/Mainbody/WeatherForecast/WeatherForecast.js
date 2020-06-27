import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WeatherCard from "./WeatherCard";
import { Typography } from '@material-ui/core';
import lookup from "country-code-lookup"
import classes from "./WeatherForecast.module.css"
import { v4 as uuidv4 } from 'uuid'; 

const WeatherForecast = (props) => {
  const { weatherStatus, location, countryCode, dataArr, error } = props;

  return (
        <div>
          {error ? <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20, color: "red"}}>
          {error}
          </Typography> : null}
          <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
          {weatherStatus ? `${location}, ` + lookup.byIso(countryCode).country : null}
          </Typography> 
          <div className={classes.Cards}>
              {weatherStatus ?
              dataArr.map((data) => (
                <WeatherCard
              date={data.date}
              icon={data.img}
              tempHigh={data.temperatureHigh}
              tempLow={data.temperatureLow}
              description={data.description}
              key={uuidv4()}
              />
              )) 
              : null}
           </div>
        </div>
  );
}

WeatherForecast.propTypes = {
  weatherStatus: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  dataArr: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    weatherStatus: state.weather.weatherStatus,
    location: state.weather.location,
    countryCode: state.weather.countryCode,
    dataArr: state.weather.dataArr,
    error: state.weather.error
  };
}


export default connect(mapStateToProps)(WeatherForecast);




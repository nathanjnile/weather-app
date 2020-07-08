import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import * as actions from "../../../store/actions/index";

const QuickButtons = (props) => {
    const {onWeatherAdded} = props;

  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
        <div>
            <Button size="large" onClick={() => onWeatherAdded("London", "UK")} style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", margin: "20px 10px 10px 0px", textTransform: "none",}}>London, UK</Button>
        </div>
        <div>
            <Button size="large" onClick={() => onWeatherAdded("New York", "US")} style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", margin: "20px 10px 10px 0px", textTransform: "none"}}>New York, USA</Button>
        </div>
        <div>
            <Button size="large" onClick={() => onWeatherAdded("Madrid", "ES")} style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", margin: "20px 10px 10px 0px", textTransform: "none"}}>Madrid, ESP</Button>
        </div>
        <div>
            <Button size="large" onClick={() => onWeatherAdded("Paris", "France")} style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", margin: "20px 10px 10px 0px", textTransform: "none"}}>Paris, FRA</Button>
        </div>
    </div>
  );
}

QuickButtons.propTypes = {
    onWeatherAdded: PropTypes.func.isRequired,
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onWeatherAdded: (weatherInput, countryInput) => dispatch(actions.addWeather(weatherInput, countryInput)),
    }
  }

export default connect(null, mapDispatchToProps)(QuickButtons);




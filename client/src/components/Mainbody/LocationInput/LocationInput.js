import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography, Button, TextField } from '@material-ui/core';
import * as actions from "../../../store/actions/index";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: "#4a4a4a",
    }
  },

  cssFocused: {
    color: "#4a4a4a"
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#4a4a4a'
  },

});

const LocationInput = (props) => {
    const {onWeatherAdded, classes} = props;
    const [weatherInput, setWeatherInput] = useState("");
    const [countryInput, setCountryInput] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        if (weatherInput === "" && countryInput === "") return
        onWeatherAdded(weatherInput, countryInput);
        setWeatherInput("");
        setCountryInput("");
    }
  

  return (
        <div>
            <Typography variant="h5" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            Enter Location:
            </Typography> 
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <form onSubmit={(event) => submitForm(event)}>
              <TextField 
              id="City-field"
              label="City"
              InputLabelProps={{ style: { color: "#4a4a4a"}}}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                }}}
              size="small"
              value={weatherInput}
              onChange={(event) => setWeatherInput(event.target.value)}
              variant="outlined" 
              style={{width: "100%"}}
                />
              <TextField 
              id="Country-field"
              label="Country"
              InputLabelProps={{ style: { color: "#4a4a4a"}}}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                }}}
              size="small"
              value={countryInput}
              onChange={(event) => setCountryInput(event.target.value)}
              variant="outlined" 
              style={{width: "100%", marginTop: 20}}
                />
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Button size="large" type="submit" style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", marginTop: 20, textTransform: "none"}}>Search</Button>
                </div>
            </form>
            </div>
        </div>
  );
}

LocationInput.propTypes = {
    onWeatherAdded: PropTypes.func.isRequired,
  }

const mapStateToProps = state => {
    return {
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onWeatherAdded: (weatherInput, countryInput) => dispatch(actions.addWeather(weatherInput, countryInput)),
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LocationInput));




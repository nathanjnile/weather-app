import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import * as actions from "../../../store/actions/index";
import { withStyles } from '@material-ui/core/styles';
import { getNames } from "country-list";
import { v4 as uuidv4 } from 'uuid'; 

const styles = theme => ({

  // cssLabel: {
  //   color : '#4a4a4a'
  // },

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
    const {onWeatherAdded, classes, countryList} = props;
    const [weatherInput, setWeatherInput] = useState("");
    const [countryInput, setCountryInput] = useState("");

    useEffect(() => {
      console.log(getNames().length);
    }, [])

    const submitForm = (event) => {
        event.preventDefault();
        onWeatherAdded(weatherInput);
        setWeatherInput("");
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
              <FormControl variant="outlined" style={{width: "100%", marginTop: 20}}>
              <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country-label"
                value={countryInput}
                onChange={(event) => setCountryInput(event.target.value)}
                label="Country">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {countryList.map((country) => (
                <MenuItem key={uuidv4()} value={country}>{country}</MenuItem>
                ))}
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              </FormControl>
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
      countryList: state.weather.countryList
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onWeatherAdded: (weatherInput) => dispatch(actions.addWeather(weatherInput)),
    }
  }

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LocationInput));




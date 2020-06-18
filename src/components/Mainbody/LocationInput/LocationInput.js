import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Typography, Button, TextField } from '@material-ui/core';
import * as actions from "../../../store/actions/index";

const LocationInput = (props) => {
    const {onWeatherAdded} = props;
    const [weatherInput, setWeatherInput] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        onWeatherAdded(weatherInput);
        setWeatherInput("");
    }

  return (
        <div>
            <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            Enter Location:
            </Typography> 
            <form onSubmit={(event) => submitForm(event)}>
              <TextField 
              id="Goal-field"
              label="Location"
              size="small"
              value={weatherInput}
              onChange={(event) => setWeatherInput(event.target.value)}
              variant="outlined" 
              style={{width: "50%", marginTop: 10}}
                />
             <Button type="submit" style={{backgroundColor: "#4a4a4a", color:"#FFFFFF", marginTop: 10, textTransform: "none"}}>Search</Button>
            </form>
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
        onWeatherAdded: (weatherInput) => dispatch(actions.addWeather(weatherInput)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput);




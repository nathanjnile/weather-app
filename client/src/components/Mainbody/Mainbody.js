import React from 'react';
import LocationInput from "./LocationInput/LocationInput";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import QuickButtons from "./QuickButtons/QuickButtons";
import { Container } from '@material-ui/core';

const Mainbody = () => {
  return (
      <Container maxWidth="sm">
        <QuickButtons/>
        <LocationInput/>
        <WeatherForecast/>  
      </Container>
  );
}

export default Mainbody;

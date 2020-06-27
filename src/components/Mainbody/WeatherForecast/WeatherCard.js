import React from 'react';
import { Typography, Card } from '@material-ui/core';
import classes from "./WeatherCard.module.css"


const WeatherCard = (props) => {
    const {date, icon, tempHigh, tempLow, description} = props;

  return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <Card className={classes.mainCard}>
                <div className={classes.dateTitle}>
                    <Typography variant="h6">
                    {date}
                    </Typography> 
                </div>
                <div className={classes.icon}>
                <img src={require(`./icons/${icon}.png`)} alt="pic" width="100" height="100" style={{display: "block", marginLeft: "auto", marginRight: "auto", marginTop: 20}}></img>
                </div>
                <div className={classes.tempHigh}>
                    <Typography variant="h6">
                    {tempHigh} °C
                    </Typography> 
                </div>
                <div className={classes.tempLow}>
                    <Typography variant="h6">
                    {tempLow} °C
                    </Typography> 
                </div>
                <div className={classes.description}>
                    <Typography variant="h6">
                    {description}
                    </Typography> 
                </div>
            </Card>
        </div>
  );
}

WeatherCard.propTypes = {
}


export default WeatherCard;




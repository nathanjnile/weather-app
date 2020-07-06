import React from 'react';
import { Typography, Card } from '@material-ui/core';
import classes from "./WeatherCard.module.css"


const WeatherCard = (props) => {
    const {date, icon, tempHigh, tempLow, description} = props;

    const dateConv = (date) => {
        const dateSplit = date.split("-");
        return `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`
    }

  return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
            <Card className={classes.mainCard}>
                <div className={classes.dateTitle}>
                    <Typography variant="h6">
                    {dateConv(date)}
                    </Typography> 
                </div>
                <div className={classes.icon}>
                <img src={require(`./icons/${icon}.png`)} alt="pic" width="90" height="90" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>
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




import React from "react";

import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Appnavbar = () => {

    return(
        <div style={{flexGrow: 1, margin: 0}}>
        <AppBar position="static" style={{backgroundColor: "#4a4a4a", margin: 0}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow : 1, userSelect: "none"}}>
            Weather App
          </Typography> 
        </Toolbar>
      </AppBar>
      </div>
    );
}

export default Appnavbar;
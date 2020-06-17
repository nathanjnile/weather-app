import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Appnavbar = () => {

    return(
        <div style={{flexGrow: 1}}>
        <AppBar position="absolute" style={{backgroundColor: "#4a4a4a"}}>
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
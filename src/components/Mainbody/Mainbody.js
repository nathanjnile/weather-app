import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Mainbody = () => {
  return (
      <Container maxWidth="sm">
        <Typography variant="h6" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20}}>
              Enter Location:
        </Typography> 
      </Container>
  );
}

export default Mainbody;

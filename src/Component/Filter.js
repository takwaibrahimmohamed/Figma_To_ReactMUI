import React from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Typography)({
    color: "rgba(41, 78, 44, 0.40)",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px", /* 233.333% */
    letterSpacing: "0.45px",
    textTransform: "uppercase",
    textAlign:"center",
    cursor:"pointer"
    
   
  });
const Filter = () => {
    return (
        <Box sx={{ maxWidth: '410px',margin:"50px auto" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
            <Grid item xs={3} >
              <Item style={{color:"#294E2C"}}>ALL</Item>
            </Grid>
            <Grid item xs={3} >
              <Item>recipes</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>stories</Item>
            </Grid>
            <Grid item xs={3} >
              <Item>ideas</Item>
            </Grid>
          </Grid>
        </Box>
      );
}

export default Filter

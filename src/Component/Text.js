import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const ContainerText=styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",

    marginTop:"50px",
    color:"#294E2C",
    
    
   
   
})
const TypographyText=styled(Typography )({
    
    fontFamily: "Nexa XBold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "35px", 
    letterSpacing:"3%",
    color:"#294E2C",
    textAlign:'center',
   
     })
const TypographyTextST=styled(Typography )({
    
    color: "#294E2C",
fontFamily: "Prettywise Variable",
fontSize: "55px",
fontStyle: "normal",
fontWeight: "700",
lineHeight: "65px", /* 118.182% */
letterSpacing: "1.65px",
textAlign:'center'
     })
const TypographyTextNew=styled(Typography )({
    
    color: "rgba(41, 78, 44, 0.50)",
    fontFamily: "Nexa Bold",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "35px",
    textAlign:'center'
     })
const Text = () => {
  return (
    <ContainerText style={{margin:"50px auto",}} sx={{marginTop:{xs:"0px",sm:"0px"},marginLeft:{xs:"0px",sm:"0px",},textAlign:{xs:"center",sm:"center",md:"center"}}}>
        
          <TypographyText>OUR BLOG</TypographyText>
          <TypographyTextST>Stories & Ideas</TypographyTextST>
          <TypographyTextNew>The latest news about coffee</TypographyTextNew>
      
    </ContainerText>
  )
}

export default Text

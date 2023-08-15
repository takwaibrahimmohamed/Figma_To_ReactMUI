import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Container, Grid, colors } from '@mui/material';
import {  styled } from '@mui/material/styles';

const Cart = () => {

    return (
      <Container >
         
        <Grid style={{width:"100%",margin:"auto"}} container rowSpacing={7} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:6 }} >
         
       
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/2a65/0395/472b122413f2cf4206cd58783a5bfb30?Expires=1693180800&Signature=l4SvNX4I9AC4upsdRIwtu9-H~T3OphTB5GdJ22FFeJQLfFcNMKGgxuDMQXuCac85voqmvLsiZPROd0fuSTngE1Zxr13j~RtBJ33VUerYR7GB0LYKLjRhwMMRVCW3TmD9h~mY0Fv5C3qqv9l-vCfM6rg9~fOjner72txq-gEI~xYI46A1jWN1-XqONSDBxGJr5Ij5pOokGDuVAg22cvyJqtgBYZfFqOTCLU0q-idxHkhd21kC74Sne~555mID1Xp3Unh1GhyFmCqzDQKXDh1aj6nK7G7kXf6TKb4wK-6ownJkGRfvURloEDd033qkoQmYzNBhJG3D6UxgDCLhfaNU8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/2d4f/540b/eca01f4080d6255d9cf08fb98e6c1e37?Expires=1693180800&Signature=K9tlMS5aNlO6U4-MOwtKDctjy~faSQox0V-v82cYF7VJ~3SuhTsZZdmsz5gxtj62LHGmCTxx9tW6AZpMr6yNHZ-oOfALtKxbwKgbnSCLLnuG8tcITezBNIutKfyPqEJjNkK7D4lOvYG7eWKirYUS5oJ6ZZqVjJxqAMgelHn7Gl~sVV8S~Pu1I5QaM4hYarIrqOUru3YGuKuFoIyglYDRXgSEFGxucckBu7s-qIYXIJTw3issE7BgNA2Mo1MlRi26j1r6zd2m9n~frYEcSaJjwPwTNagnNsswTbFlHKINYwqAnaqjxxd3F-iOkMrvirsRBvtsZ~W8E5vABVQ0g1wvsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/845c/803a/ac863db9df9712dc42ce14c7598cad7e?Expires=1693180800&Signature=AUwMnOI4VPE5EempJs4J9uAbr9HidLXqVjqZX5Nn8sNVEDq4D-sLbRmzM7xPKD~LaNT64v~fK6uAqv88CNeyj2yPZUzq~TAMdqrsTn1zFz9~i8S9xz8bTj-~hfW9H5MaPf6Vxr--HZZ0OhypbrSxSrV51AmDapQX4Ps2kFajTAVcWWIoD7GvOQL8gaLAotQeYXI-5eZwPFTqk7sUlfJ9OKVxoTUjcenZl0SCukTNfmiNfuQ4miga8jTZuX~xIcxmTY6ItDsZJxyly4parIL8UwylrlbfgTJHrMU2k7~8NwlwfaCO-7jXIR7Os7iVZ1nctyU5K2rbp6~s2z0OnakSLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/e95f/318c/409a5e0ccf13b21ceaf0de4634e66863?Expires=1693180800&Signature=FS7HOgb-6f4vv6SCK1isOWCaYaeaOjifBn-lJoLhzVf9EPCV-7paxbb8F4SWSK6eVanhlFQLvVOoXoU6Er8PGpIkXkqNWeJD-MzgK1Tvt49q8iUJCXFERSA6x1AsfadVWkwqHMUHRK2Zd8nc6w3lNPzMH8Ns5bPMxCQRPK7uGnyBiMvu6QzBc9E1tx931Dng~W67pVaxxaR6zNtD-ln-rH1TE6BOGGrWHOSMTjGKSWeixABDmMckKXu1d451aTNUaQ0431uhon61yY0FqbHEJ7Q355CA7v5NMppsitokCWM4vuu5x-gvyWhQmxw6kqHKRva99GdCdiTTrlbo0~aOgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/6225/868a/e5536d4fd7d6b1a6be6942aad7499e2f?Expires=1693180800&Signature=ALGbtRvYGLpKprQT7A3qVtJlp1noctGJf-~tTimtwcoJUON76dw9z~TjOL--vcHNPc~nlbk69-6E2BxVyjnSFJZYLJtRE~sUln5M-yx5-FpnX5TUd8k80ozErXPBHKwM~MVfnqvgRZk4Mb5XMShw1CmP7T~LH7ITcufm0grefhUeTiLtcfMZU~4mpVFGadTUz7oN94EwpSyKtHVBysMG0QCdU1D4mAQntNxg8-e4-7nXSmJDtiMceFnCG8iDH7C8vlYWP0IACwlUvcJQ-KXowLqT029Ual1roFHXXWvcAGJ3wsqY8r4LxK1oPmP5w06AZ5~QdvW0uom~htvKscn6rw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/8981/7fb2/ce5db3cbe549ea07f56af8d494ce13ba?Expires=1693180800&Signature=L1sBe1XwG0ZDXMZFOuF6ndYeNxVETCeQgI05mBsepEq5eW5Oe8RWThvokK0BZ3Dkra5PWC3-V~39CqZS5rtNVNZ7Ge5FEJungb2OxpaOQV6ZP-xYeVgbzDFlbbAQ7XOPEI82JSYYZeFs~niXvzI5wIO3Upx-S-xgy5yX0B8mwahBA74s0ZfpkL-G8A8dfEJiKQs~27LyeiWDpbLAq9MlkFJj5x9cRC2-wscxCNp9i8BRK3g0nlEDMAkeuq2-5fING66ZbhUvEZxrL1ZPkuAosT-fER0pyAlZ4kVUt-KMQ0nPPEjeOPoA3bh4OFHpu2OdIOSTXmjzQbHz~z26fpv9bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box  style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/9b18/abe2/839d04cabe33a9faaa1355e8d0dadb58?Expires=1693180800&Signature=I43L9OslDQ5EyB3y2v6a06~pT~JnTbV5-4p4xq5y~Z7stg~mDr1ZFSRoRkj1G3RjrTh-Wo~fTU~01mHOgH6kbzdLSFR8L0jJCTsxBfVjIuvOuSCWL74fG8ApnNiHEMzx~F8DYFx0fuWqt62GpQe2MGq5lgd39~s7dXxhAbbgX1gCzVro4yVQOOQzqiyqrY8xRIaRvamGcgNwNDSxIadVbeCcbUE0vVptvPj1dWc04uv8drTVQ4qbxTMGAmPLa7XLiq9f9bTj47dXrKG-EIjIetogNTjctd2ma5oAFHBUyxDNHaHlx9soIpxKembOdMpT0EcfP~7Xefh9QeXMmzLlXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/cc17/7937/a84fac08b93407ecf893dd664babf51a?Expires=1693180800&Signature=bURKWmPlwOnGTmWDuntnP104sH3xLSxXF-ukDM0w17MBLOHpf~3sYLGZrN~85wfYmhxkd8fwiq6gXj6OgzIzTRJWoyPzTzOfAifqTbyulV7lA6zU0bpbC7VT2JZpshEMHPW1GzSnxDouagV03uVZ3af3P5un2XptFjtcm~8Ql06YIW3kkZLl1KrWfwQLEHGfhNAlag0e4ftHsWMlVSqXEhOcZI1DED4~gskF8Qd0QNYnp51FUqbr1bKf-KQOF8u15oo7bv-vnox15s8EeHmjg2GmUSWK75bZJfTYlGUHHku6206NvxPi5sj5O1cWOULcZ6ml3Fg4lCIB-ElLErPUqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box style={{backgroundColor:"transparent"}}>
          <CardMedia
          style={{
            height: "241px",borderRadius:" 9px"}}
            component="img"
            alt="green iguana"
            height="140"
            image="https://s3-alpha-sig.figma.com/img/a475/18dd/6cafc7395eba71a8a7d3653d8acdcc40?Expires=1693180800&Signature=WUof6Ron42M7kOVMzEK78fRP4ZtlXmj6uWaKIycmoHFUZrUElHfloPQvrJA8Op2P8xcDhH1Af3JYc6g98zHQ8SixGcZ~mvfhAipyXldTzY3XyQs1yX3wSKOQ2gUI~rw0KFI0ffVL7AZjY9P3Smu2XQejRhrKnuQRFgCWWsEyxKFI3SD56XcQNt5PdYGxBbK5JaB8FtaBM64xnwfqMfm2PDMRnbFTlASgBC4It-cpQI9bUjqQ8OVacT0-OygMNByyRz-hFN-vVqj9sjE6z1Ce0A4Dhd~kB1tixijHn8Fwmc5TUFJ2rbH9WR6N4pZxIUvg4MOhY11hRksAMBrCRK8RLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <CardContent style={
            {
                maxWidth:"275px",
                padding:"10px 0 0 0",
               
            
            }}>
            <Typography gutterBottom variant="h5" component="div" style={{

                 color:" #000",
                fontFamily: "Prettywise Variable",
                fontSize: "19px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "35px", /* 175% */
                letterSpacing: "0.6px",
                textTransform: "uppercase",
              
            }} >
            Best Coffee Gifts Ever
            </Typography>
          
          </CardContent>
          <CardActions  
          style={
            {
               
                padding:"10px 0 0 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                
                
            
            }}
          >
          <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/cf71/1d17/2c8cdcfa9a74b068d6489efa4801a615?Expires=1693180800&Signature=qs1D8xeoVW35OKyAvZqoFBcEVDokP--fVYokOeTGUUUZ7XN26PMBtpXhVcnDciJAfc63IFvflwKLrzKeyWEh~dk47pCbzwZHL0KoFEobw6ZR-zMB8jhAvWdLuDn9YDgCHxNfCw2lbTWHJ9GrEnNMZH2mWQLGvgQE0SpiS4jRYoj82rtZiCku2n8SZV-Ww2IckRG7Lamk8Nqjon5HQMlRiWfNwSfiZgwSvwEZgeBsBTHlTiVRfEiVFCPqJ7wkypn3107uidyWRUo5I3iBiNCFUGaQMyfQLN85mW2yI23j4pRCFfz6Lqfqul8Pfb-7QC4wItz3Fu6SwTsIu6rgDgacsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            <Typography 
                style={{
                    color: "rgba(41, 78, 44, 0.50)",
                    fontFamily: "Nexa Bold",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "33px",
                }}
                
            >By Tols Es</Typography>
          </CardActions>
        </Box>
          </Grid>
          
        </Grid>
      
      </Container>
       
     
      );
    }

export default Cart

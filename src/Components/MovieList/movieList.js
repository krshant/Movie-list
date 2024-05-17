import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Carousel from 'react-material-ui-carousel'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export default function MovieList(props){
    return(
        <>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box sx={{bgcolor:'MistyRose', height:"25px", display:'flex', padding:"6px"}}>
              <DoubleArrowIcon />
              <Typography sx={{fontSize:'18px', fontFamily: "Arial"}}>Recommended Movies</Typography>
            </Box>
            <Box>
            <Carousel
              fullHeightHover={false}
              NextIcon={<img src="http://random.com/next"/>}
              PrevIcon={<img src="http://random.com/prev"/>}
            > 
            {
                props?.recommendedMovieList?.map( (item, i) => <img key={i} src={item?.Poster} /> )
            }
            </Carousel>
            </Box>
          </Grid> 
        </Grid>          
        </>
    )
}
import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MovieIcon from '@mui/icons-material/Movie';


export default function SearchMovieList(props){

    return(
        <>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box sx={{bgcolor:'MistyRose', height:"25px", display:'flex', padding:"6px", justifyContent:'center'}}>
              <Typography sx={{fontSize:'16px', fontFamily: "Arial"}}>Searched result</Typography>
            </Box>
            <Box sx={{p:1}}>
            <ImageList sx={{width:"100%", height: 500 }} cols={4} gap={16}>
                {props?.movieData.map((item) => (
                  <ImageListItem key={item.Poster}>
                    <img
                      srcSet={`${item.Poster}?w=100&h=160&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.Poster}?w=120&h=160&fit=crop&auto=format`}
                      alt={item.Title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.Title}
                      subtitle={<span>{item?.Year}</span>}                                        
                    />
                  </ImageListItem>
                ))}
            </ImageList>
            </Box>
          </Grid>
        </Grid>          
        </>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
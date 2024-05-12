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
                  <ImageListItem key={item?.title?.id}>
                    <img
                      srcSet={`${item.title?.primaryImage?.imageUrl}?w=100&h=160&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.title?.primaryImage?.imageUrl}?w=120&h=160&fit=crop&auto=format`}
                      alt={item?.title?.originalTitleText?.text}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title?.originalTitleText?.text}
                      subtitle={<span>{item?.title?.releaseYear?.year}</span>}                                        
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


import './../../index.scss';

import Box from '@mui/material/Box';
import { Typography, Button, Grid } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import Stack from '@mui/material/Stack';

export default function MovieCatgory(props){
    return(
        <>
        <Box sx={{p:1}}>
            <Box className="MovieCat">
            <CategoryIcon /><Typography sx={{fontSize:18, fontFamily: "Arial"}}>CATEGORIES</Typography>
            </Box>
        </Box>
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', padding:"4px 2px", justifyContent:"center"}}>
            <Stack spacing={1} flexWrap="wrap" direction={"row"}>
            {CatList.map((item,i)=>(
                i > 5 ? "" : 
                <Button 
                variant="outlined" 
                key={item?.id} 
                sx={{color:'black', borderColor:'deeppink', border:'2px solid round', backgroundColor:'white', }} 
                onClick={() => {props?.handleMovieList(item?.value); props?.setSearchText(item?.value)}}>{item?.name}
                </Button> 
            ))}
            </Stack>
            {/* <Typography className='topMenuItem'>Action </Typography> */}
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', padding:"4px 2px", justifyContent:"center"}}>
            <Stack spacing={1} flexWrap="wrap" direction={"row"}>
            {CatList.map((item,i)=>(
                i > 5 ? 
                <Button 
                variant="outlined" 
                key={item?.id} 
                sx={{color:'black', borderColor:'deeppink', border:'2px solid round', backgroundColor:'white', }} 
                onClick={() => {props?.handleMovieList(item?.value); props?.setSearchText(item?.value)}}>{item?.name}
                </Button> 
                : ""
            ))}
            </Stack>
            </Box>
        </Grid>
        </>
    )
}

const CatList = [
    {id: 1, name: 'Action', value: 'action'},
    {id: 2, name: 'Comedy', value: 'comedy'},
    {id: 3, name: 'Romance', value: 'romance'},
    {id: 4, name: 'Horror', value: 'horror'},
    {id: 5, name: 'Drama', value: 'drama'},
    {id: 6, name: 'Family', value: 'family'},
    {id: 7, name: 'War', value: 'war'},
    {id: 8, name: 'Crime', value: 'crime'},
    {id: 9, name: 'Documentary', value: 'documentary'},
    {id: 10, name: 'Animation', value: 'animation'},
    {id: 11, name: 'Adventure', value: 'adventure'},
    {id: 12, name: 'Crime', value: 'crime'},
    {id: 13, name: 'Fantasy', value: 'fantasy'},
    // {id: 14, name: 'History', value: 'history'},
    // {id: 15, name: 'Sci-Friction', value: 'sci-friction'},
]
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function TopMenu(){
    return(
        <>
        <Box sx={{ display: 'flex', padding:"6px"}}>
        <Typography sx={{ fontSize:'30px', m:'0 auto', fontFamily: "Georgia"}}>MoviesHome </Typography>
        </Box>
        {/* <Box sx={{ display: 'flex', padding:"10px", float:'right'}}>
        <Typography sx={{ minWidth: 80 }}>About </Typography>
        <Typography sx={{ minWidth: 80 }}>Contact </Typography>
        </Box> */}
        </>
    )
}   
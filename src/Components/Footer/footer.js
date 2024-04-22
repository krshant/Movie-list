
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Footer(){
    return(
        <>
            <Box sx={{bgcolor:'gray', height:'30px', padding:"10px"}}>
                <Typography sx={{textAlign:"center"}}>Copyright 2023 | All Rights Reserved | MovieHome</Typography>
            </Box>
        </>
    )
}
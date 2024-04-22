import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function SearchBox(props){
    return(
        <>
        <Box sx={{p:3}}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', width: 400, m:'0 auto'}}
            >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search here"
                  inputProps={{ 'aria-label': 'Search here' }}
                //   value={props?.setSearchText}
                  onChange={(e) => props?.setSearchText(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon onClick={props?.handleMovieList}/>
                </IconButton>
            </Paper>
        </Box>
        </>
    )
}
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

import TopMenu from '../TopMenu/topmenu';
import Footer from '../Footer/footer';
import SearchBox from '../Search/search';
import MovieCatgory from '../MovieCategory/movieCatgory';
import MovieList from '../MovieList/movieList';
import SearchMovieList from '../SearchMovieList/searchMovieList';

export default function HomePage(){

    const [searchText, setSearchText] = useState("")
    const [movieData, setMovieData] = useState([])
    const [recommendedMovieList, setRecommendedMovieList] = useState([])

    useEffect(()=>{
        handleMovieList()
        handleRecommendedMovies()
    },[])

    const handleRecommendedMovies = async() => {
        try{
            let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c9fdf302&s=recommends`);
            const data = await res?.json();
                setRecommendedMovieList(data?.Search)
        }catch(error){
            console.log(error)
        }        
    }

    const handleMovieList = async (searchText) => {
        try{
            let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c9fdf302&s=${searchText}`);
            const data = await res?.json();
                console.log(data,'data')
                setMovieData(data?.Search)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <>
        <Box sx={{maxWidth:"1440px", m:"0px auto", width:"80%"}}>
        <Grid container spacing={0}>
            <Grid xs={12} md={12}>
                <Box sx={{bgcolor:'deeppink', height:'60px'}}>
                <TopMenu />
                </Box>
            </Grid>
            <Grid  xs={12} md={12}>
                <Box sx={{bgcolor:'plum', height:'250px'}}>
                    <SearchBox  searchText={searchText} setSearchText={setSearchText} handleMovieList={handleMovieList} />
                    <MovieCatgory setSearchText={setSearchText} handleMovieList={handleMovieList}/>
                </Box>
            </Grid>
            <Grid  xs={12} md={12}>
                <Box sx={{bgcolor:'pink', height:'600px'}}>
                    {Boolean(movieData?.length) ? 
                        <SearchMovieList movieData={movieData} searchText={searchText}/> : <MovieList recommendedMovieList={recommendedMovieList} /> 
                    }    
                </Box>
            </Grid>
            <Grid  xs={12} md={12}>
                <Footer />
            </Grid>
        </Grid>
        </Box>
        </>
    )
}
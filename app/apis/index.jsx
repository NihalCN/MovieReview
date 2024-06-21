import axios from 'axios'
const API_KEY = '17dedf2fdf11becb58b4b7ba12db6bfa'

export const getMoviesAndTvShows = async()=>{
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`)
        return response;
      } catch (error) {
          console.log(error);
      }
}

export const getMovieList = async() =>{   
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      return response;
    } catch (error) {
        console.log(error);
    }
}

export const getTvShowList = async()=>{
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getDataById = async (dataValue) =>{
    try {
        console.log(dataValue,"dataValue")
        const response = await axios.get(`https://api.themoviedb.org/3/${dataValue.first_air_date?"tv":'movie'}/${dataValue.id}?api_key=${API_KEY}`)
        return response; 
    } catch (error) {
        console.log(error);
    }
}

export const searchMoviesAndShows= async(query)=>{
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`)
        return response; 
    } catch (error) {
        console.log(error);
    }
}
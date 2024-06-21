import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieDetail:{}
}

export const movieDetailsSlice = createSlice({
  name: 'moviedetails',
  initialState,
  reducers: {
    setMovieDeatil:(state,action)=>{
       state.movieDetail = action.payload;
    },
  },
})


export const {setMovieDeatil} = movieDetailsSlice.actions

export default movieDetailsSlice.reducer
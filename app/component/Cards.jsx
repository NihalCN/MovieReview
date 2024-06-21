'use client'
import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useRouter } from "next/navigation";
import {getDataById} from '../apis/index'
import { useDispatch, useSelector } from "react-redux";
import {setMovieDeatil} from '../redux/movieDetailsSlice'

function Cards({ cardData }) {
    
    const dispatch = useDispatch();
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
    const router = useRouter();
    const showDetails = async(dataValue)=>{
        const {data} = await getDataById(dataValue);
        if(data){
            dispatch(setMovieDeatil(data))
        }
        if(dataValue){
            router.push(`/movie-details/${dataValue.id}`)
        }
    }
  return (
    <Grid container>
      {cardData?.map((movie) => {
        return (
          <Grid item className="p-3" lg={3} md={4} sm={6} xs={12} onClick={()=>showDetails(movie)}>
            <Grid className="relative bg-[#2B2B3D] sm:w-[17rem] sm:h-[28rem] sm:mt-5 xs:w-[13rem] xs:h-[21rem] xs:mt-3 w-auto h-[29rem] p-3  mt-10 rounded-xl cursor-pointer">
              <Grid className="absolute z-10 flex items-center bg-[rgb(0,0,0)]/60 p-2 left-5 top-5 rounded-lg">
                <StarBorderIcon sx={{ color: "#C1853B" }} />
                <Typography sx={{ color: "#C1853B" }}>{Math.round(movie.vote_average*10)/10}</Typography>
              </Grid>
              <Image
                className="rounded-xl xs:w-[13rem] sm:w-[17rem]"
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                width={300}
                height={300}
                alt="Picture of the author"
              />

              <Typography className="mt-3 ml-3 font-bold text-gray-300">
               {movie.original_title||movie.original_name}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cards;

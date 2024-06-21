'use client'
import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";



function page() {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
  const {movieDetail} = useSelector((state)=>state.moviedetails);

  return (
    <Grid className="xs:overflow-x-hidden">
      <Grid className="w-[100%] h-[28rem] xs:h-[20rem] mt-20 relative">
        <Image
          className="w-[100%] h-[400px] xs:h-[200px]  xs:rounded-[20px] object-cover rounded-[40px]"
          src={`${IMAGE_BASE_URL}${movieDetail.backdrop_path}`}
          width={1500}
          height={100}
        />
        <Grid className="absolute bg-[#121729] xs:w-[15rem] xs:left-0 xs:top-[11rem] xs:h-[6rem] w-2/5 h-[9rem] backdrop-blur-xl p-5 bottom-0 left-20 rounded-3xl">
          <Typography className="text-sm text-[#BCB6F9]">
            MaileHereko / {movieDetail?.first_air_date?"TV Shows":"Movies"}
          </Typography>
          <Typography className="text-[2.1rem] xs:text-[1.5rem] xs:mt-2 text-nowrap text-white font-semibold mt-3">
            {movieDetail.original_title||movieDetail?.original_name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="ml-20 mt-20 xs:mt-0 xs:ml-0 flex lg:flex-row-reverse sm:flex-col-reverse sm:ml-2 xs:flex-col-reverse">
        
        <Grid item lg={6}>
          <Typography className="text-[1.7rem] xs:w-[15rem] font-semibold text-gray-200">
           {movieDetail?.tagline}
          </Typography>
          <Typography className="mt-5 w-96 xs:w-[15rem]">
            {movieDetail?.overview}
          </Typography>
          <Grid className="flex items-center bg-[rgb(0,0,0)]/60 p-2 rounded-lg w-30 mt-3">
            <StarBorderIcon sx={{ color: "#ffad49" }} />
            <Typography sx={{ color: "#ffad49", ml: 1 }}>{Math.round(movieDetail?.vote_average*10)/10}</Typography>
          </Grid>
          <Grid>
            <Typography className="mt-5 text-gray-500 text-md">Type</Typography>
            <Typography className="text-gray-300 font-medium text-[1.4rem]">{movieDetail?.first_air_date?'TV':'Movie'}</Typography>
            <Typography  className="mt-5 text-gray-500 text-md">Release Date</Typography>
            <Typography className="text-gray-300 font-medium text-[1.4rem]">{movieDetail?.release_date||movieDetail?.first_air_date}</Typography>
            <Typography className="mt-5 text-gray-500 text-md">Run Time</Typography>
            <Typography className="text-gray-300 font-medium text-[1.4rem]">{movieDetail?.runtime||movieDetail?.episode_run_time||'NA'} minutes</Typography>
            <Typography className="mt-5 text-gray-500 text-md">Genres</Typography>
            <Typography className="text-gray-300 font-medium text-[1rem]">{movieDetail?.genres?.map(genre => genre.name).join(', ')}</Typography>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Image
            className="rounded-[20px] w-[90%] h-[80%] sm:mt-7 xs:mt-5"
            src={`${IMAGE_BASE_URL}${movieDetail.poster_path}`}
            width={550}
            height={100}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default page;

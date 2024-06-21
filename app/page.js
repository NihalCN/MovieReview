"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./component/Navigation";
import {
  Box,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Cards from "./component/Cards";
import { getMovieList, getTvShowList, getMoviesAndTvShows, searchMoviesAndShows } from "./apis/index";
import { debounce } from "lodash";
function page() {
  const [value, setValue] = useState(0);
  const [cardData, setCardData] = useState([]);

  const fetchDataToDisplay = async (tabId) => {
    if (tabId === 0) {
      const {
        data: { results },
      } = await getMoviesAndTvShows();
      setCardData(results);
    }
    if (tabId === 1) {
      const {
        data: { results },
      } = await getMovieList();
      setCardData(results);
    } else if (tabId === 2) {
      const {
        data: { results },
      } = await getTvShowList();
      setCardData(results);
    }
  };

  const handleChange = async (event, newValue) => {
    fetchDataToDisplay(newValue);
    setValue(newValue);
  };
  const debouncedSearch = debounce(async(value) => {
   let {data:{results}} = await searchMoviesAndShows(value);
   let filteredResults = results.filter((dataItem)=>dataItem.backdrop_path)
   setCardData(filteredResults);
  }, 500);

  const handleSearch = (event) =>{
    const { value } = event.target;
    debouncedSearch(value);
  }

  useEffect(() => {
    fetchDataToDisplay(0);
  }, []);

  return (
    <Grid className="overflow-x-hidden overflow-y-hidden">
      {/* Hero Section */}
      <Grid className="mt-35 xs:mt-[6rem]">
        <h1 className="text-7xl text-gray-100 font-semibold xs:text-4xl">MaileHereko</h1>
        <p className="mt-3 xs:text-sm">
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have
          watched till date.
          <br /> Explore what I have watched and also feel free to make a
          suggestion. 😉
        </p>
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "lightgray",
                opacity: 0.2,
                borderRadius: "12px",
              },
              "& input": {
                height: "2.7em", // Increase height
                padding: "10px 14px", // Adjust padding to center the text
                color:'gray'
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "lightgray",
              opacity: 0.5,
            },
          }}
          className="w-96 mt-4 rounded-xl h-30 xs:w-60 xs:mt-5"
          placeholder="Search Movies Or TV Shows"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined className="text-gray-600 text-4xl xs:text-2xl" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid>
        {/* Tabs */}
        <Grid
        className="xs:w-[250px] sm:w-[330px]"
          sx={{
            position: "relative",
            background: "rgba(0, 0, 0, 0.3);",
            width: "400px",
            marginTop: "4rem",
            padding: "9px",
            borderRadius: "10px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                display: "none",
                position: "absolute",
              },
            }}
          
            sx={{
              "& .MuiTab-root": {
                minWidth: 90,
                color: "white",
                borderRadius: "12px",
                marginRight: "10px",
                textTransform: "none",
                fontWeight: "bold",
                "&.Mui-selected": {
                  backgroundColor: "#7E79F6",
                  color: "white",
                },
              },
            }}
            className="text-sm xs:text-lg"
          >
            <Tab className="text-sm xs:text-sm xs-min-w-[20]" label="All" />
            <Tab label="Movies" />
            <Tab label="TV Shows" />
          </Tabs>
        </Grid>
        <Grid>
          <Typography className="text-3xl font-bold mt-10 ml-2 text-gray-500">
            {value === 0 ?"All":value === 1?"Movies":"Tv Shows"}
            <span className="font-normal text-base ml-2">({cardData?.length})</span>
          </Typography>
          <Cards cardData={cardData} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default page;

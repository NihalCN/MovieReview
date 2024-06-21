'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Grid container className="flex items-center justify-between">
      <Grid item className="flex items-center justify-between relative">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
      </Grid>
      <Grid item className='md:hidden absolute right-5 top-10 xs:top-[4rem]'>
        <button onClick={toggleMenu} className="text-gray-400 focus:outline-none md:flex-row-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </Grid>
      <Grid item className={`md:flex ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
        <Link className="text-gray-400 font-semibold mr-8" href="/">
          Movies
        </Link>
        <Link className="text-gray-400 font-semibold mr-8" href="/" passHref>
          TV Shows
        </Link>
        <Link className="text-gray-400 font-semibold mr-8" href="/" passHref>
         Suggest Me <ArrowRightAltIcon/>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Navigation;

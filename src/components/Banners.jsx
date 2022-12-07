import React from 'react';
import { Link } from 'react-router-dom';
import bannerFirst from '../assets/banner1.gif';
import bannerSecond from '../assets/banner2.gif';

export const Banners = () => {
  return (
    <>
      <Link to="https://t.me/Makoker" className="sm:mt-20 mt-5 block">
        <img src={bannerFirst} alt="" className="w-full"/>
      </Link>
      <Link to="https://t.me/Makoker" className="my-10 block">
        <img src={bannerSecond} alt="" className="w-full"/>
      </Link>
    </>
  );
};

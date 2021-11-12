import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/lambo2.jpg';

const Banner = () => {
  return (
    <div className=" ">
      <div
        className="bg-cover bg-center    h-auto text-white xl:py-72 py-48 object-fill"
        style={{
          backgroundImage: `url(${banner}`,
          backgroundPosition: 'center',
          paddingTop: '50px',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <div className="md:w-1/2 bg-gray-200    text-black    rounded">
          <p className="font-bold text-yellow-600 text-sm xl:mt-36 mt-28  uppercase pt-5 ">
            THE ALL NEW
          </p>
          <hr className="bg-red-500" />
          <p className="text-5xl font-bold   mb-8">Corolla 2021 TUNDRA</p>
          <p className="text-sm mb-10 leading-none px-10 font-bolder">
            Go Beyond Extraordinary. With Captivating details inside and out ,
            maek a grand entrance wherever you go!
          </p>
          <Link
            to="/explore"
            className="bg-yellow-400 py-4 px-8 text-black font-bold uppercase text-xs rounded-xl hover:bg-gray-200 hover:text-gray-800"
          >
            Explore All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import banner from '../../../images/lambo2.jpg';

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center   h-auto text-white py-96 object-fill"
        style={{
          backgroundImage: `url(${banner}`,
          backgroundPosition: 'center',
          paddingTop: '323px',
          backgroundSize: 'cover',
        }}
      >
        <div className="md:w-1/2 bg-gray-200  text-black  rounded">
          <p className="font-bold text-yellow-600 text-sm uppercase pt-5 ">
            THE ALL NEW
          </p>
          <hr className="bg-red-500" />
          <p className="text-5xl font-bold   mb-8">Corolla 2021 TUNDRA</p>
          <p className="text-sm mb-10 leading-none px-10 font-bolder">
            Go Beyond Extraordinary. With Captivating details inside and out ,
            maek a grand entrance wherever you go!
          </p>
          <a
            href="/"
            className="bg-yellow-400 py-4 px-8 text-black font-bold uppercase text-xs rounded-xl hover:bg-gray-200 hover:text-gray-800"
          >
            Explore All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

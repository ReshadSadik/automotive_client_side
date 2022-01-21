import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import Carousel from 'react-elastic-carousel';

import styles from './Banner.module.css';
import BannerCarousel from './Carousel/BannerCarousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.banner}>
      <div className="xl:text-5xl text-xl font-bold uppercase text-green-600 mt-10">
        <AutoTyping
          active // <boolean>
          textRef="find your dream car here" // <string>
          writeSpeed={100} // <number>
          deleteSpeed={40} // <number>
          delayToWrite={500} // <number>
          delayToDelete={3000} // <number>
        />
        <BlinkCursor
          active // <boolean>
          blinkSpeed={500} // <number>
        />
      </div>
      <div className="xl:flex block items-center   container mx-auto xl:mt-36 mt-10">
        <div
          className="bg-cover xl:w-3/6 w-full bg-center  text-white xl:py-2  object-fill"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="   hi  text-yellow-500  font-bold text-xl  rounded">
            <p className="">THE ALL NEW</p>
            {/*
          <hr className="bg-red-500" />
          <p className="text-5xl font-bold   mb-8">Corolla 2021 TUNDRA</p>
          <p className="text-sm mb-10 leading-none px-10 font-bolder">
            Go Beyond Extraordinary. With Captivating details inside and out ,
            maek a grand entrance wherever you go!
          </p> */}
            <div className="text-5xl text-green-600 font-bold">
              <Carousel
                infiniteLoop
                verticalMode
                className=""
                enableAutoPlay
                autoPlaySpeed={2200}
                itemsToShow={1}
                renderPagination={({ pages, activePage, onClick }) => {
                  return <div></div>;
                }}
              >
                <div>
                  <h2 className=" xl:text-4xl text-sm">COROLLA TUNDRA</h2>
                  <p className=" mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque fugit quas culpa necessitatibus. Vitae necessitatibus
                    odit cupiditate minus reprehenderit laudantium consequuntur
                    natus esse.
                  </p>
                </div>
                <div>
                  <h2 className=" xl:text-4xl text-sm">RAV 4 INFINITE</h2>
                  <p className=" mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque fugit quas culpa necessitatibus. Vitae necessitatibus
                    odit cupiditate minus reprehenderit laudantium consequuntur
                    natus esse.
                  </p>
                </div>
                <div>
                  <h2 className=" xl:text-4xl text-sm">MITSUBISHI HYBRID</h2>
                  <p className=" mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque fugit quas culpa necessitatibus. Vitae necessitatibus
                    odit cupiditate minus reprehenderit laudantium consequuntur
                    natus esse.
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
          {/* <Link
          to="/explore"
          className="bg-yellow-400 py-4 px-8  text-black font-bold uppercase text-xs rounded-xl hover:bg-gray-200 hover:text-gray-800"
        >
          Explore All
        </Link> */}
        </div>
        <div
          className={styles.bannerCarousel}
          data-aos="fade-top"
          data-aos-duration="3000"
        ></div>
        <div
          className={styles.bannerCarousel2}
          data-aos="fade-left"
          data-aos-duration="3000"
        ></div>
        <BannerCarousel></BannerCarousel>
      </div>
      <svg
        className={styles.bannerSVG}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00897b"
          fill-opacity="1"
          d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,186.7C840,181,960,139,1080,106.7C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      {/* <!-- all effects aanimaton start --> */}
      <div class={styles.plusSpin}></div>
      <div class={styles.squareSpin}></div>
      {/* <div class={styles.tria}"triangle-spin"></div> */}
      <div class={styles.roundSpin1}></div>
      <div class={styles.roundSpin2}></div>

      {/* <!-- all effects aanimaton end --> */}
    </div>
  );
};

export default Banner;

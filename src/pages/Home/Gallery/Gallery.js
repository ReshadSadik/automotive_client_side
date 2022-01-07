import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.galleryBG}>
      <div className="flex container items-center  mx-auto ">
        <div className="flex-1 p-10  bg-gray-100  rounded">
          <div>
            <div className={styles.galleryBlob}>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#00897b"
                  d="M46,-56.3C58.8,-44.1,67.8,-28.8,69.1,-13.3C70.5,2.1,64.2,17.8,55.8,32.1C47.4,46.5,36.9,59.5,22.7,66.5C8.4,73.6,-9.5,74.6,-24.8,68.8C-40.1,62.9,-52.7,50.3,-61.9,35.3C-71,20.3,-76.6,2.9,-75.3,-14.8C-74,-32.5,-65.8,-50.6,-52.1,-62.6C-38.4,-74.6,-19.2,-80.5,-1.3,-79C16.6,-77.5,33.3,-68.4,46,-56.3Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <h4 className="relative text-2xl text-white right-20 font-bold bottom-40 z-30">
              About
            </h4>
            <h2 className="text-4xl font-bold relative bottom-48 z-30 text-gray-100 mb-20 mt-8">
              AUTOM<span className="text-yellow-500">OTIVE</span>
            </h2>

            <p className="w-72 relative bottom-36  text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam, harum saepe nam esse pariatur commodi hic distinctio
              rem. Mollitia, officiis facere ratione voluptas nostrum
              consectetur error. Sunt debitis iure autem.
            </p>
          </div>
        </div>
        <div>
          <section class="overflow-hidden text-gray-700">
            <div class="container px-5 py-2 mx-auto lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://media.istockphoto.com/photos/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-picture-id1325588832?b=1&k=20&m=1325588832&s=170667a&w=0&h=r3Ded8uEQhXZnWhKlbxd93xSP7PzFtpVx-ATok-ZbSU="
                    />
                  </div>
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </div>
                  <div class="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

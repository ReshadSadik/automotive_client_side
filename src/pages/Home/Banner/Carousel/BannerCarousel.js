import React, { useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import InnerItem from './InnerItem';
import Carousel from 'react-elastic-carousel';
import './BannerCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const BannerCarousel = () => {
  const { products } = useAuth();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      style={{ width: '800px', height: '250px' }}
      className="styling-example"
    >
      <Carousel
        className=""
        enableAutoPlay
        autoPlaySpeed={2000}
        itemsToShow={1}
        renderPagination={({ pages, activePage, onClick }) => {
          return <div></div>;
        }}
      >
        {products &&
          products
            .slice(0, 3)
            .map((product) => <img src={product.img_sm} alt="" />)}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;

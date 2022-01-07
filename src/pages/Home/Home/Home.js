import React from 'react';
import Footer from '../../../shared/Footer/Footer';
import Navigation from '../../../shared/Navigation/Navigation';
import Pay from '../../Dashboard/Pay/Pay';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <div></div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Gallery></Gallery>
      <Products></Products>
      <Reviews></Reviews>
      <Contact></Contact>
      <Pay></Pay>
      <Footer></Footer>
    </div>
  );
};

export default Home;

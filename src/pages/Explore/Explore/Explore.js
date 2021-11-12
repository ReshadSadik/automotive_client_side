import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';
import Product from '../../Home/Product/Product';

const Explore = () => {
  const { products } = useAuth();

  return (
    <div>
      <Navigation></Navigation>
      <div>
        <h2 className="text-3xl mt-8 font-bold uppercase ">All Products</h2>
        <hr className="w-96 mx-auto bg-yellow-500 mb-8  h-1" />

        <div className="flex flex-wrap justify-center">
          {products &&
            products.map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

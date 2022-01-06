import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import Carousel from 'react-elastic-carousel';

const Products = () => {
  const { products } = useAuth();
  return (
    <div>
      <h2 className="text-3xl mt-8 font-bold uppercase ">Feature Products</h2>
      <hr className="w-96 mx-auto bg-yellow-500 mb-8  h-1" />

      <div className="flex flex-wrap justify-center">
        {products &&
          products
            .slice(0, 6)
            .map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
      </div>
    </div>
  );
};

export default Products;

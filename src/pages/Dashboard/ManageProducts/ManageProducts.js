import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
  const { products } = useAuth();

  return (
    <div>
      <div>
        <h2 className="text-3xl mt-8 font-bold uppercase ">Feature Products</h2>
        <hr className="w-96 mx-auto bg-yellow-500 mb-8  h-1" />

        <div className="flex flex-wrap justify-center mx-auto">
          {products &&
            products.map((product) => (
              <ManageProduct
                product={product}
                key={product._id}
              ></ManageProduct>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

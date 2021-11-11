import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../shared/Navigation/Navigation';
import swal from 'sweetalert';

import './Purchase.css';

const Purchase = () => {
  const { id } = useParams();
  const { products, user } = useAuth();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const purchaseData = {
      email: user.email,
      name: user.displayName,
      productId: id,
      productName: purchaseProduct.name,
      productImg: purchaseProduct.img_sm,
      additionalInfo: data,
    };

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal('order placed successfully');

          reset();
          history.replace('/home');
        }
      });
  };

  const purchaseProduct = products.find((product) => product._id === id);

  return (
    <div className="h-screen">
      <Navigation></Navigation>
      {purchaseProduct && (
        <div className=" ">
          <div
            className="grid container mx-auto lg:mt-56 
        mt-20 grid-cols-1   md:grid-cols-12 gap-2"
          >
            <div className="col-span-7  ">
              <img className="mx-auto" src={purchaseProduct.img_lg} alt="" />
              <h2 className="text-5xl  font-bold capitalize shadow-sm">
                {purchaseProduct.name}
              </h2>
              <p className="px-14 my-3">{purchaseProduct.description_lg}</p>
              <p className="text-4xl font-bold text-yellow-500">
                {purchaseProduct.price} <span>/per month</span>
              </p>
            </div>
            <div className="col-span-5  mx-auto">
              {' '}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  style={{ outline: 'none' }}
                  readOnly
                  type="text"
                  className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 static"
                  placeholder={user.displayName}
                />
                <input
                  readOnly
                  type="text"
                  className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 static"
                  placeholder={user.email}
                />
                <input
                  type="text"
                  required
                  className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
                  {...register('adress')}
                  placeholder="adress"
                />
                <input
                  required
                  type="number"
                  className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
                  {...register('phone')}
                  placeholder="phone"
                />
                <input
                  type="text"
                  className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
                  placeholder="zip code"
                />

                <input
                  className="text-black font-bold py-2 px-7 w-80 rounded-md bg-yellow-400 cursor-pointer"
                  type="submit"
                  value="place order"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;

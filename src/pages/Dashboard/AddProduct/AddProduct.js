import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal('Product added successfully');

          reset();
        }
      });
  };

  return (
    <div className="lg:ml-36 flex justify-center mx-auto ml-0 mt-36">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          style={{ outline: 'none' }}
          type="text"
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 static"
          {...register('name')}
          placeholder="Product Name"
        />
        <input
          type="number"
          required
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
          {...register('price')}
          placeholder="price"
        />
        <input
          required
          type="text"
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 static"
          {...register('description')}
          placeholder="description"
        />
        <input
          required
          type="text"
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5 static"
          {...register('description_lg')}
          placeholder="large description"
        />

        <input
          required
          type="text"
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
          {...register('img_sm')}
          placeholder="small image link"
        />
        <input
          required
          type="text"
          className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
          {...register('img_lg')}
          placeholder="large image link"
        />

        <input
          className="text-black block font-bold py-2 px-7 w-80 rounded-md bg-yellow-400 cursor-pointer"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;

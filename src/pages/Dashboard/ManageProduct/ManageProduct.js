import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './ManageProduct.css';

const ManageProduct = (props) => {
  const { name, price, description, img_sm, _id } = props.product;
  //   const redirectUrl = `/service/${_id}`;
  const styleSheet = {
    position: 'relative',
    backgroundImage: `url(${img_sm})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ' top',
    paddingTop: '10px',
    zIndex: '2',
  };

  const handleRemoveItem = (id) => {
    const accept = window.confirm(
      'are you sure you want to remove this item ? '
    );
    if (accept) {
      fetch(`https://cryptic-bayou-87271.herokuapp.com/products/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          swal('Item deleted successfully');
          window.location.reload();
        });
    } else {
      return;
    }
  };

  return (
    <div>
      <div
        style={styleSheet}
        className="container cards   lg:w-96 md:w-80 w-64  pt-12 px-4 text-center  md:mx-14 mx-10   my-10  shadow-lg rounded-lg"
      >
        <div className=" text-white  z-50  background flex-auto">
          <div className="text-gray-600 p-3 text-center inline-flex mr-56 items-center justify-center w-40 mb-32 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
            <i className="text-xl font-bold">{name}</i>
          </div>

          <div>
            <button
              onClick={() => {
                handleRemoveItem(_id);
              }}
              className="homeCardBtns rounded  text-white w-20 sm:text-2xl bg-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;

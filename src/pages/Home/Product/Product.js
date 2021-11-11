import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
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

  return (
    <div>
      <div
        style={styleSheet}
        className="container card   lg:w-96 md:w-80 w-64  pt-12 px-4 text-center  md:mx-14 mx-10   my-10  shadow-lg rounded-lg"
      >
        <div className=" text-white  z-50  background flex-auto">
          <div className="text-gray-600 p-3 text-center inline-flex mr-56 items-center justify-center w-40 mb-32 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
            <i className="text-xl font-bold">{name}</i>
          </div>
          <Link to={`/purchase/${_id}`}>
            <div>
              <button className="homeCardBtn rounded  text-yellow-600 w-20 sm:text-2xl bg-white">
                Buy Now
              </button>
            </div>
          </Link>
          <p className="mt-2 font-semibold text-sm  pb-5 sm:block hidden mb-4 ">
            {description}
          </p>
          {/* <Link to={redirectUrl}> */}

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Product;

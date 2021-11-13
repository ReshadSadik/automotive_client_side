import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import reviewLogo from '../../../images/review.svg';
import './Review.css';
const Review = () => {
  const { user } = useAuth();
  const history = useHistory();
  // swal('order placed successfully');
  const { register, handleSubmit, reset } = useForm();

  const userName = user.displayName;

  const onSubmit = (data) => {
    const review = {
      userName,
      img: user.photoURL,
      reviewText: data.reviewText,
    };

    fetch('https://cryptic-bayou-87271.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal('review added successfully! ');
          reset();
          history.replace('/home#reviews');
        }
      });
  };

  return (
    <div>
      <h2 className="xl:text-3xl text-2xl mt-10 font-bold ">
        What Are Your Thoughts??{' '}
      </h2>
      <span className="font-bold text-yellow-600">share with us!!</span>
      <div className="flex flex-wrap container xl:ml-20 ml-0 mt-20 justify-around">
        <div className="flex justify-center  items-center  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <img className="w-14 rounded-full" src={user.photoURL} alt="" />
              <input
                style={{ outline: 'none' }}
                readOnly
                type="text"
                className="text-sm xl:w-80 w-56 bg-gray-500 font-bold flex flex-row justify-between  h-8 pl-5 text-center rounded-lg my-5 static tt"
                {...register('userName')}
                placeholder={`post as :  ${user.displayName} `}
              />
            </div>

            <textarea
              style={{ outline: 'none' }}
              type="text"
              required
              className="text-sm xl:w-96 w-64 xl:h-80 h-36 mx-auto bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
              {...register('reviewText')}
              placeholder="write a review"
            />

            {/* <Link
            smooth
            to="/home#reviews"
            activeClassName="selected"
            // etc...
          > */}
            <input
              className="text-black font-bold py-2 px-7 w-80 rounded-md bg-yellow-500 cursor-pointer"
              type="submit"
            />
            {/* </Link> */}
          </form>
        </div>
        <div className="">
          <img className="w-9/12 my-10 mx-auto" src={reviewLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;

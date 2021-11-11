import React, { useState } from 'react';
import logo from '../../../images/pngegg.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {
    setError,
    error,
    setUser,
    setIsLoading,
    signInWithGoogle,

    loginUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  // const redirect_uri = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  // sign in with email pass

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = (e) => {
    loginUser(email, password, location, history);
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
      <Link to="/home">
        <button
          type="button"
          className=" rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
          style={{ color: '#ff2f59' }}
        >
          <MdClose></MdClose>
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={logo} alt="Logo" style={{ width: '90px' }} />

        <form className="mt-4 " onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Email"
            onBlur={handleEmailChange}
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />
          <input
            type="password"
            placeholder="Password"
            onBlur={handlePasswordChange}
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />

          <button className="text-black font-bold py-2 px-7 w-80 rounded-md bg-yellow-500">
            Log In
          </button>
          <br />
          <div className="flex items-center justify-center">
            <p className="text-center py-3 my-5 text-brand-1">
              Dont have an account ?
            </p>
            <Link to="/register">
              <p className="font-semibold mx-2 text-xl text-yellow-600 ">
                Sign up
              </p>
            </Link>
          </div>

          <p className="text-center py-3 font-semibold text-brand-1">{error}</p>
        </form>
        <hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>
        <div className="flex justify-center mb-44">
          <button
            onClick={handleGoogleSignIn}
            className="rounded-full bg-brand-1 text-black text-2xl p-2 mt-5 hover:bg-white  border-white hover:border-brand-1 border-2 hover:text-brand-1"
          >
            <BsGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

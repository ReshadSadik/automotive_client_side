import React, { useState } from 'react';
import logo from '../../../images/pngegg.png';
// import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
// import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
// import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';
import { MdClose } from 'react-icons/md';
import { BsGoogle } from 'react-icons/bs';

const Register = () => {
  const {
    setError,
    error,

    setUser,
    setIsLoading,

    signInUsingGoogle,

    registerUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePassChange = (e) => {
    setRePass(e.target.value);
  };

  // goggle sign in
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((res) => {
        setUser(res.user);
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //register with email and pass
  const handleSignUp = (e) => {
    // check validity
    e.preventDefault();
    if (password.length <= 5) {
      setError('Password Must be atleast 6 character long');
      return;
    }

    if (password !== rePass) {
      setError("Password Doesn't match!!");
      return;
    } else {
      registerUser(email, password, name, history);
      setError('');
    }
  };

  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
      <Link to="/home">
        <button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
          style={{ color: '#ff2f59' }}
        >
          <MdClose></MdClose>
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center h-screen">
        <img src={logo} alt="Logo" style={{ width: '90px' }} />

        <form className="mt-4 " onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            onBlur={handleNameChange}
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            onBlur={handleRePassChange}
            className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
            style={{ outline: 'none' }}
          />
          <button className="text-black font-bold py-2 px-7 w-80 rounded-md bg-yellow-500">
            Sign Up
          </button>
          <br />
          <div className="flex items-center justify-center mt-6">
            <p className="text-center py-3 font-semibold text-brand-1">
              Already have an account?
            </p>
            <Link to="/login">
              <p className="font-semibold mx-2 text-xl text-yellow-600 ">
                Log In
              </p>
            </Link>
          </div>

          <p className="text-center py-3 font-semibold text-brand-1">{error}</p>
        </form>
        <hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center mb-44 border border-2 rounded-xl border-yellow-500 shadow-lg cursor-pointer"
        >
          <button className="rounded-full bg-brand-1 text-black text-2xl p-2  hover:bg-white  border-white hover:border-brand-1 border-2 hover:text-brand-1">
            <BsGoogle />
          </button>
          <h2 className="p-2  text-xl font-bold ">sign in with google</h2>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';
import logo from '../../images/pngegg.png';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className=" bg-gray-900 shadow-lg font-sans leading-normal tracking-normal">
        <nav
          //   style={{
          //     background: `linear-gradient(360deg, rgba(44,45,49,0.9612219887955182) 0%, rgba(12,102,74,0.9528186274509804) 13%, rgba(5,150,105,1) 100%)`,
          //   }}
          className="flex   items-center  justify-between flex-wrap  px-6   w-full z-10 top-0 "
        >
          <div className=" md:ml-40 ml-0  flex-shrink-0 text-white mr-6">
            <a
              className="text-purple-200 font-extrabold no-underline hover:text-white hover:no-underline flex items-center"
              href="/"
            >
              <span className="text-2xl mx-auto flex align-center">
                <img className="w-20 h-20   mr-5" src={logo} alt="" />
              </span>
              <h4>AUTOMOTIVE</h4>
            </a>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={toggle}
              id="nav-toggle"
              className="flex items-center  bg-white px-3 py-2 border rounded text-green-600  border-white  hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full flex-grow  lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
            id="nav-content"
          >
            <ul
              className="list-reset lg:flex justify-center flex-1
            xl:ml-96 md-0 items-center"
            >
              <li className="mr-3">
                <Link
                  className="inline-block font-bold text-white py-2 px-4 "
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  className="inline-block font-bold text-white   py-2 px-4"
                  to="/explore"
                >
                  EXPLORE
                </Link>
              </li>
              {user.email && (
                <li className="mr-3">
                  <Link
                    className="inline-block font-bold  no-underline hover:text-gray-200 hover:text-underline text-white py-2 px-4"
                    to="/dashboard"
                  >
                    DASHBOARD
                  </Link>
                </li>
              )}
              <li className="mr-3">
                {/* <Link
                  className="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/about"
                >
                  ABOUT
                </Link> */}
              </li>
            </ul>
            <div className="mx-5 ">
              <div>
                {!user.email ? (
                  <Link
                    className="inline-block font-bold text-black no-underline hover:text-underline bg-yellow-400 rounded-xl  py-2 px-4 xl:mb-0 mb-2"
                    to="/login"
                  >
                    Login
                  </Link>
                ) : (
                  <div className="inline-block font-bold text-yellow-700 no-underline hover:text-green-900 hover:text-underline bg-white  rounded-xl  py-2 px-4  xl:mb-0 mb-2">
                    <h2>{user.displayName}</h2>
                  </div>
                )}
              </div>
            </div>
            <div className="mx-5">
              <div>
                {!user.email ? (
                  <Link
                    className="inline-block font-bold text-black no-underline hover:text-underline bg-yellow-400 rounded-xl  py-2 px-4 xl:mb-0 mb-2  "
                    to="/register"
                  >
                    Sign up
                  </Link>
                ) : (
                  <div className="cursor-pointer" onClick={logOut}>
                    <div className="inline-block font-bold text-black no-underline hover:text-underline bg-yellow-400 rounded-xl  py-2 px-4 xl:mb-0 mb-2  ">
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

const toggle = () => {
  document.getElementById('nav-content').classList.toggle('hidden');
};

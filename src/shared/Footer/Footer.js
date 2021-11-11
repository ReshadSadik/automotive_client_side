import React from 'react';
import logo from '../../images/pngegg.png';

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-gray-900">
        <div className="container  px-5 py-10 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left">
            <a
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mt-10"
            >
              <img className="w-36" src={logo} alt="" />
              <span className="ml-3 text-2xl text-yellow-500 font-bold">
                AUTOMOTIVE
              </span>
            </a>
          </div>
          <div className="flex-grow flex justify-center items-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10  text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-yellow-500 font-extrabold tracking-widest text-sm mb-3">
                HOME
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Our Motto
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Services
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-yellow-500 font-extrabold tracking-widest text-sm mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Full support
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    24 Hours Services
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Final Certificate
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-yellow-500 font-extrabold tracking-widest text-sm mb-3">
                ABOUT US
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Contact Us
                  </a>
                </li>
                <li className="mt-2">
                  <a href="/" className="text-white hover:text-purple-200">
                    Set a Meeting
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="container mx-auto text-center  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white font-bold text-sm mx-auto ">
              © AUTOMOTIVE —
              <a href="/" className="text-white ml-1" target="_blank">
                @Reshad
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

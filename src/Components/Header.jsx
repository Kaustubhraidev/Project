import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import Hostel from './Hostel'
import Restaurants from './Restaurants'
import Other from './Other'
import Stationary from './Stationary'
import { useAuth0 } from "@auth0/auth0-react";


export default function Header() {
  const { loginWithRedirect } = useAuth0();
  return (
    <header data-aos="fade-right" className="shadow sticky z-50 top-0 my-0 mb-4">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 ">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center sm:w-36 sm:h-0">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-6"
              alt="Logo"
            />
          </Link>
          <div  className="flex items-center lg:order-2">
            <Link
              to="/signin"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Register
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <button onClick={() => loginWithRedirect()}>Sign in</button>
            </Link>
          </div>
          <div
            className="lg:h-32 justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-2 lg:text-2xl border-4 rounded-2xl hover:shadow-blue-500 shadow-2xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700`
                  }
                >
                  Hostel
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    `block py-2 px-2 lg:text-2xl border-4 rounded-2xl hover:shadow-blue-500 shadow-2xl pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Restaurants
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stationary"
                  className={({ isActive }) =>
                    `block py-2 px-2 lg:text-2xl border-4 rounded-2xl hover:shadow-blue-500 shadow-2xl pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Stationary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/other"
                  className={({ isActive }) =>
                    `block py-2 px-2 lg:text-2xl border-4 rounded-2xl hover:shadow-blue-500 shadow-2xl duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Others
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
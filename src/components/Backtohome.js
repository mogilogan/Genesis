
import React, { useState } from "react";


import { navLinks } from "./navData";

import { Link, NavLink } from "react-router-dom";

import {BsRocketFill,BsRocketTakeoffFill} from 'react-icons/bs'

import logo from '../assets/logo.png';


const Backtohome = () => {

  

  const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav

  //   If button is there
  // const handleClick = () => {
  //   if (isMobileNavOpen) {
  //     setisMobileNavOpen(false);
  //   }
  // };
  
  const scrollToSection = (sectionId) => {
    
  }
  return (
    <div className="sticky z-[9999] top-0">
    <div className="flex flex-wrap sys-app-notCollapsed ">
      <div className="w-full ">
        <div className="pb-0 py-2 px-2 mx-auto ">
          <div className="w-full flex justify-between items-center p-2 text-gray-900  font-medium capitalize">


            {/* Logo */}
            <div>
              <span className="px-2 mr-2 md:border-r border-gray-800">
                <img
                src={logo}
                  alt="alt placeholder"
                  
                  className=" h-[100px] w-[100px] -mt-1 inline mx-auto"
                />
              </span>
            </div>
             {/* After all nav links if you want any button in right then it will come here */}
             <div></div>

            <div className="px-2 md:flex gap-x-5 items-center  text-red-900 font-medium capitalize ">
              {/* Links */}
             
                <Link to="/" >
                  <a
                 
                    className={`px-2 py-1 flex items-center cursor-pointer font-space   hover:bg-gray-200 hover:text-gray-700 text-xl rounded
                      
                    "text-gray-700 
                       
                    `}
                  >
                    Home
                  </a>
                </Link>
         
            </div>

           

            {/* Hamberger Menu  */}
           

        {/* Mobile Navbar */}
      

              {/* After all nav links if you want any button or link then it will come here */}
              
           
          </div>
        </div>
      </div>
    </div>



   
  </div>



  );
};

export default Backtohome;
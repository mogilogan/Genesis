
import React, {  useState } from "react";


import { navLinks } from "./navData";

import { Link, NavLink, useLocation } from "react-router-dom";

import {BsRocketFill,BsRocketTakeoffFill} from 'react-icons/bs'
import logo from '../assets/logo.png';
import aud from '../assets/aud.mp3';



const Navbar = () => {

  const location = useLocation();
  
  const [isMobileNavOpen, setisMobileNavOpen] = useState(false);
  const [isMobileNavtypeeventOpen, setisMobileNavtypeeventOpen] = useState(false);
  const [isMobileNavdayeventOpen, setisMobileNavdayeventOpen] = useState(false); // For toggling the mobile nav



  
const [show,setShow] = useState(true); // For toggling the
// const [play,setPlay] = useState(false); // For toggling the play
  
const handlePlay = () =>{
var audio = document.getElementById('audio');
audio.volume = 0.8;
audio.play();
  setShow(false);
}


const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

}



  return (
    <div className="sticky z-[9999] top-0">
    <div className="flex flex-wrap sys-app-notCollapsed ">
      <div className="w-full ">
        <div className="pb-0 py-2 px-2 mx-auto ">
          <div className="w-full flex justify-between items-center p-2 text-gray-900  font-medium capitalize">
            {show===true &&
          <div className="popup-box ">
      
      <div className="mx-auto heart beat">
        <button className=" bg-yellow-500 px-1 py-2 rounded-lg" onClick={handlePlay}>Please Verify!</button></div>
     
    </div> }

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
             <figure>

  <audio id="audio"   src={aud}>
   
  </audio>
</figure>




            <div className="px-2 md:flex gap-x-5 items-center  text-[#565656]  font-medium capitalize hidden">
              {/* Links */}
{ location.pathname === "/drone" || location.pathname === "/Rocketry" ? (
<div className="px-2 md:flex gap-x-5 items-center  text-[#565656]font-medium capitalize ">
              {/* Links */}
             
                <Link to="/" >
                  <a
                 
                    className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black text-white  bg-gray-600 hover:bg-[#b6c480] text-xl rounded
                      
                    "text-gray-700 
                       
                    `}
                  >
                    Home
                  </a>
                </Link>
         
            </div> ) :
 ( location.pathname === "/day-wise" ? ( <>
            
  <div className="px-2 md:flex gap-x-5 items-center  text-[#565656]font-medium capitalize ">
   
  <Link to="/type-wise" ><a className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
               >Type-wise Events</a></Link>
   <Link to="/" ><a className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
     >Home</a></Link>
     
  </div>
  </> ) : (  location.pathname === "/type-wise" ? (
     
     <>
            
            <div className="px-2 md:flex gap-x-5 items-center  text-[#565656]font-medium capitalize ">
             
            <Link to="/day-wise" ><a className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
               >day-wise Events</a></Link>
             <Link to="/" ><a className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
               >Home</a></Link>
             
            </div>
            </> ) : (             
              <>
              {navLinks?.map(({ title, link }, id) => (
                <NavLink key={id}  onClick={() => scrollToSection(link)}>
                  <a
                    id={id}
                    className={`px-2 py-1 flex items-center bg-white hover:bg-[#b6c480] cursor-pointer font-space    hover:text-black text-xl rounded ${
                      window.location.pathname === link
                        ? "text-gray-700 "
                        : ""
                    }`}
                  >
                    <span className="mx-1 font-space font-bold ">{title}</span>
                  </a>
                </NavLink>
              ))} </>)))}
            </div>






            <div className="md:hidden transition-all mr-3 my-3  cursor-pointer text-white hover:text-yellow-500">
            { location.pathname === "/drone" || location.pathname === "/Rocketry" ? (
              <div className="px-2 md:flex gap-x-5 items-center  text-[#565656]font-medium capitalize ">
             
             
                <Link to="/" >
                  <a
                 
                    className={`px-2 py-1 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded
                      
                    "text-gray-700 
                       
                    `}
                  >
                    Home
                  </a>
                </Link>
         
            </div>
            ) : 
           ( location.pathname === "/day-wise"  ? ( 
            
            <>
              {isMobileNavdayeventOpen ? (
              
                <BsRocketTakeoffFill
                  onClick={() => setisMobileNavdayeventOpen(false)}
                  className="rounded text-2xl"
                />
              ) : (
               
                <BsRocketFill
                  onClick={() => setisMobileNavdayeventOpen(true)}
                  className="rounded text-2xl"
                />
              )}
           </>
            
            ) : (  location.pathname === "/type-wise" ? ( <>


              <>
              {isMobileNavtypeeventOpen ? (
              
                <BsRocketTakeoffFill
                  onClick={() => setisMobileNavtypeeventOpen(false)}
                  className="rounded text-2xl"
                />
              ) : (
               
                <BsRocketFill
                  onClick={() => setisMobileNavtypeeventOpen(true)}
                  className="rounded text-2xl"
                />
              )}
           </>

             
            
            
            </>) : (

           <>
              {isMobileNavOpen ? (
              
                <BsRocketTakeoffFill
                  onClick={() => setisMobileNavOpen(false)}
                  className="rounded text-2xl"
                />
              ) : (
               
                <BsRocketFill
                  onClick={() => setisMobileNavOpen(true)}
                  className="rounded text-2xl"
                />
              )}
           </>
)))}
</div>
          </div>
        </div>
              

        {/* Mobile Navbar */}
        <div
          id="navbar"
          className={`pt-0 absolute top-0 z-100 mx-auto ${
            isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap md:hidden`}
        >
          <div className=" w-80">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-gray-900 rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <img
                src={logo}
                alt="alt placeholder"
                className="h-[200px] w-[200px] mx-auto mb-5 "
              />

              {/* Links */}
              {navLinks?.map(({ title, link }, id) => (
                <NavLink key={id}  onClick={() =>{ scrollToSection(link);setisMobileNavOpen(false);}}>
                  <a
                    id={id}
                    className={` flex items-center py-4 cursor-pointer bg-gray-900    text-sm  ${
                      window.location.pathname === link
                        ? "text-gray-700 font-semibold"
                        : ""
                    }`}
                  >
                   
                    <span className="mx-auto bg-blue-400 text-white min-w-[130px] font-space text-xl px-2 py-2 rounded-xl">{title}</span>
                  </a>
                </NavLink>
              ))}

              {/* After all nav links if you want any button or link then it will come here */}
              
            </div>
          </div>
        </div>


        <div
          id="navbar"
          className={`pt-0 absolute top-0 z-100 mx-auto ${
            isMobileNavtypeeventOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap md:hidden`}
        >
          <div className=" w-80">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-gray-900 rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <img
                src={logo}
                alt="alt placeholder"
                className="h-[100px] w-[100px] mx-auto mb-5 "
              />

              {/* Links */}
              <div className="py-2">
              <Link onClick={() => setisMobileNavtypeeventOpen(false)} to="/day-wise" ><a className={`px-2 py-4 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
               >Day-wise Events</a></Link></div>
             <div><Link to="/" onClick={() => setisMobileNavtypeeventOpen(false)}>
               <a
              
                 className={`px-2 py-4 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded
                   
                 "text-gray-700 
                    
                 `}
               >
                 Home
               </a>
             </Link></div>

              {/* After all nav links if you want any button or link then it will come here */}
              
            </div>
          </div>
        </div>




        <div
          id="navbar"
          className={`pt-0 absolute top-0 z-100 mx-auto ${
            isMobileNavdayeventOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all flex-wrap md:hidden`}
        >
          <div className=" w-80">
            <div className="w-full py-4 space-y-6 px-2 text-gray-900 bg-gray-900 rounded-lg min-h-screen  text-left capitalize font-medium shadow-lg">
              {/* Logo */}
              <img
                src={logo}
                alt="alt placeholder"
                className="h-[100px] w-[100px] mx-auto mb-5 "
              />

              {/* Links */}
              <div className="py-2">
              <Link to="/type-wise" onClick={() => setisMobileNavdayeventOpen(false)}><a className={`px-2 py-4 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded text-gray-700 `}
               >Type-wise Events</a></Link></div>
             <div><Link to="/" onClick={() => setisMobileNavdayeventOpen(false)}>
               <a
              
                 className={`px-2 py-4 flex items-center cursor-pointer bg-[#] font-space hover:text-black  bg-gray-300 hover:bg-[#b6c480] text-xl rounded
                   
                 "text-gray-700 
                    
                 `}
               >
                 Home
               </a>
             </Link></div>

              {/* After all nav links if you want any button or link then it will come here */}
              
            </div>
          </div>
        </div>
      </div>
    </div>



   
  </div>



  );
};

export default Navbar;
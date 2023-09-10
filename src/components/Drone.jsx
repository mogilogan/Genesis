import React from "react";



import one from '../assets/drones/one.JPG';
import two from '../assets/drones/two.JPG';
import three from '../assets/drones/three.JPG';
import four from '../assets/drones/four.JPG';
import five from '../assets/drones/five.JPG';
import six from '../assets/drones/six.JPG';
import vid from '../assets/drones/vid.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;



 
const Drone = props => {
  return (
    <section className="pb-20">
      
    <div class=" w-[100%]    flex-col items-center justify-center space-y-6 bg-[url('../public/moon.gif')] sm:bg-cover bg-repeat-y sm:bg-no-repeat px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
  
  


    <h1 className="text-2xl md:text-6xl fcuks shines text-center shine py-8 md:py-20  font-bubble">Build and Fly your own Drone</h1>



  <div className="mx-auto">
    <video src={vid} className="mx-auto" height="400px" width="900px" autoPlay controls={true} loop muted/>
    <h1 className=" text-xl md:text-3xl font-mono font-semibold text-center pt-6">Previous Workshop images</h1>
    <Carousel className="pt-[30px] w-[60%] mx-auto items-center center" dynamicHeight={true} infiniteLoop >
               
               <div>
               <img src={one} height="300px" width="200px"/>
               </div>
   
               <div>
               <img src={two} height="300px" width="200px"/>
              
               </div>
               <div>
               <img src={three} height="300px" width="200px"/>
               </div>
               <div>
               <img src={four} height="300px" width="200px"/>
               </div>
               <div>
               <img src={five} height="300px" width="200px"/>
               </div>
               <div>
               <img src={six} height="300px" width="200px"/>
               </div>
      </Carousel>
  </div>


   <div className="flex flex-col sm:flex-row ">
   
    <div class=" m-8 relative space-y-4 text-sm md:text-2xl ">
    <ul class="list-[lower-greek] leading-[3]  font-space">
  <li>A workshop on Drone  by AIC-PECF</li>
  <li>Planned to be conducted on 26th, 27th and 28th of September 2023.</li>
  <li>
    <li>Timings:</li>
    <ul className="list-[decimal] pl-4">
  <li>UAV Introduction: 10:15 am to 11:15 am</li>
  <li>Introduction to Drone Electronics: 11:15 am to 12:40 pm</li>
  <li>Drone Prototyping: 1:30 pm to 3:30 pm</li>
  <li>Flight Testing: 1:30 pm to 3:30 pm</li>
  </ul></li>
  
  <li>Venue: PTU Premises</li>
  <li><span className="bg-yellow-800 rounded-xl px-2">Rs. 600</span> per Person for <span className="bg-yellow-800 rounded-xl px-2">School Students </span></li>
  <li><span className="bg-teal-800 rounded-xl px-2">Rs. 750</span> per Person for <span className="bg-teal-800 rounded-xl px-2">College Students</span> </li>
  <li>Certificates will be Provided!</li>
  <li>COORDINATORS: Sangesh S(8870073053)<br/> CH V Upendra(8985122204)</li>
</ul>
</div>
   

    <div class="w-full  mx-auto  my-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
      <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Want to Control the Flight?</h1>
      <p class="my-4 text-center text-md text-gray-500">Do your Drone now!!!</p>
      <div class="space-x-4 py-4 text-center">
        <a href="https://forms.gle/G1LrYffWQojYXX7o9" target="_blank"><button  class="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Register</button></a>
      </div>
    </div>
    </div>
    </div>



           
           </section>
      
  );
};
 
export default Drone;
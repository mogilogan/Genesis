import React from "react";


 
const Rocketry = props => {
  return (
    <section className="pb-20">
    <div class=" w-[100%]   flex-col items-center justify-center space-y-6 bg-[url('../public/moon.gif')] bg-cover  bg-no-repeat px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
  
  


    <h1 className="text-xl md:text-6xl fcuk shine text-center shine pt-8 md:py-20  font-bubble">Rocketry</h1>

   

   <div className="flex flex-col sm:flex-row ">
   
    <div class=" m-8 relative space-y-4 text-sm md:text-2xl ">
    <ul class="list-[lower-greek] leading-[3]  font-space">
  <li>A workshop on Rocketry  by AeroIn Space Tech Pvt Ltd.</li>
  <li>Planned to be conducted on 26th, 27th, 28th and 29th of September 2023.</li>
  <li>Theoretical Session: 9:00 am to 1:00 pm</li>
  <li>Rocket Launch: 2:00 pm to 3:30 pm</li>
  <li>Venue: PTU Premises</li>
 
  <li><span className="bg-teal-800 rounded-xl px-2">Rs. 1100</span> per Person</li>
  <li>Certificates will be Provided!</li>
  <li>COORDINATORS: Sangesh S(8870073053) <br/>CH V Upendra(8985122204)</li>
</ul>
</div>
   

    <div class="w-full  mx-auto  my-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
      <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Countdown your own launch?</h1>
      <p class="my-4 text-center text-md text-gray-500">Prepare your Rocket now!!!</p>
      <div class="space-x-4  py-4 text-center">
        <a href="https://forms.gle/SMNvKF26JQ7eEsc89" target="_blank"><button  class="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Register</button></a>
      </div>
    </div>
    </div>
    </div>



           
           </section>
      
  );
};
 
export default Rocketry;
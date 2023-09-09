
import Earth3JS from "./Earthdmoon";
import { Workshop,About, Experience, Hero, StarsCanvas } from "./components";

import Navbar from './components/Navbar'


function App (){
  return(
    <div>
   
        <Navbar />
     

       <div id="dashboard">
       <Hero/>
       </div>
       <div id="about">
       <About/>
      
       </div>
       <Earth3JS/>
       <StarsCanvas/>
       
       <div id="workshop" className="w-[100%]">
        <Workshop/>
       </div>
     
       <div id="events"><Experience/></div>
       
       
       
    </div>

)
}

export default App;
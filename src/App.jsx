
import { Route, Router, Routes } from "react-router-dom";
import Earth3JS from "./Earthdmoon";
import { Workshop,About, Experience, Hero, StarsCanvas } from "./components";

import Navbar from './components/Navbar'
import Drone from "./components/Drone";
import Backtohome from "./components/Backtohome";
import Rocketry from "./components/Rocketry";


function App (){
  return(
    <div>
       
   <Routes>
    <Route path="/" exact element={<>
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
    
    </>} />

    <Route path="/drone" exact element={<>
    <Backtohome/>
    <div>
      <Drone/>
    </div>
    </>} />

    <Route path="/rocketry" exact element={<>
    <Backtohome/>
    <div>
      <Rocketry/>
    </div>
    </>} />
        
       </Routes>
       
       
    </div>

)
}

export default App;